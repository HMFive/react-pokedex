import React from 'react';
import Navbar from '../components/common/Navbar';

const Navigation = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Navigation;
