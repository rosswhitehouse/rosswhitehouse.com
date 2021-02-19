import React from 'react';

import Contact from './Contact';

const Intro = ({ theme }) => {
    const isNesTheme = theme === 'nes';
    return (
        <div
            className="header__intro">
            <h2>Hi! I'm Ross Whitehouse.{isNesTheme && <i className="nes-icon coin is-large"></i>}</h2>
            <p>I work in JavaScript and CSS, making web apps in React, Vue and Node.js.</p>
            <p>I work at Hotjar, mentor learning developers, and write about web development. I even had an article published on <a href="https://www.gatsbyjs.com/blog/2018-2-6-choosing-a-back-end/">Gatsbyjs.com</a> a couple years ago!</p>
            <p>In real life I’m a weight lifter <span role="img" aria-label="weightlifter">🏋️</span>, video gamer <span role="img" aria-label="video game controller">🎮</span>, and obsessive podcast listener <span role="img" aria-label="headphones">🎧</span>.</p>
            <Contact theme={theme} />
        </div>
    );
}

export default Intro;
