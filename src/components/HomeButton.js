import React from 'react';

const HomeButton = ({ theme }) => {
  const isNesTheme = theme === 'nes';
  return (
    <a href="/" className={`home-button ${isNesTheme ? 'nes-btn' : ''}`}>Ross Whitehouse</a>
  );
};

export default HomeButton;