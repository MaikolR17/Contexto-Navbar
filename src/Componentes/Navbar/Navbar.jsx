import React, { useContext } from 'react';
import { UserContext } from '../UserContext/UserContext';

const Navbar = () => {
  const { name } = useContext(UserContext);

  return (
    <nav>
      <h1> Hi, {name}!</h1>
    </nav>
  );
};

export default Navbar;
