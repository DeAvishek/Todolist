import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} My Todo App</p>
      <p>All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  marginTop: '260px',
  padding: '10px',
  backgroundColor: 'rgb(16 15 7 / 52%)',
  textAlign: 'center',
  color:"white",
  position:"realtive"
};

export default Footer;