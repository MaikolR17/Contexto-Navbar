import React from 'react';
import { UserProvider } from '../UserContext/UserContext';
import Navbar from '../Navbar/Navbar';
import FormWrapper from '../FormWrapper/FormWapper';

const Wrapper = ({ children }) => {
  return (
    <UserProvider>
      <Navbar />
      <FormWrapper />
      {children}
    </UserProvider>
  );
};

export default Wrapper;
