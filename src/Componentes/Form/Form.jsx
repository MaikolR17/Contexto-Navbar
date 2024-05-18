import React, { useContext } from 'react';
import { UserContext } from '../UserContext/UserContext';

const Form = () => {
  const { setName } = useContext(UserContext);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className='userName'>
        <h3> Your Name: </h3>
        <input type="text" placeholder="Type your name" onChange={handleChange} />
    </div>
  );
};

export default Form;
