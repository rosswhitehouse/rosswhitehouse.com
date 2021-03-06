import React, { useEffect } from 'react';

const ThemeSwitcher = ({ theme, setTheme }) => {

  useEffect(() => {
    // On first load, get stored theme. Set stored theme or set to default.
    const storedTheme = localStorage.getItem('theme');
    setTheme(storedTheme || 'yellow');
  }, []);

  useEffect(() => {
    // When theme is updated, update local storage and change ID on body.
    if (localStorage.getItem('theme') !== theme) localStorage.setItem('theme', theme);
    document.body.id = `theme-${theme}`;
  }, [theme]);

  return (
    <div className="theme-switcher">
      <button className="theme-switcher-button yellow" aria-label="set theme to yellow" onClick={() => setTheme('yellow')}></button>
      <button className="theme-switcher-button red" aria-label="set theme to red" onClick={() => setTheme('red')}></button>
      <button className="theme-switcher-button grey" aria-label="set theme to grey" onClick={() => setTheme('grey')}></button>
      <button className="theme-switcher-button rainbow" aria-label="set theme to rainbow" onClick={() => setTheme('rainbow')}></button>
      <button className="theme-switcher-button nes" aria-label="set theme to NES" onClick={() => setTheme('nes')}>
        <i className="snes-jp-logo"></i>
      </button>
    </div>
  );
};

export default ThemeSwitcher;