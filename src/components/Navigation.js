import React from 'react';
import Navbar from './Navbar';

const Navigation = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Navigation;
