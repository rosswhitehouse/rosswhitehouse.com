import React from 'react';
import Link from 'gatsby-link';

import Slider from './Slider';
import Contact from './Contact';

const Intro = () => {
    return (
        <div
            className="header__intro">
            <h2>Hi! I'm <em>Ross Whitehouse</em>, I'm a <em>Front-End</em> Developer from Birmingham, UK.<br />Take a look at my work, and <em>say hello</em>!</h2>
            <Contact />
        </div>
    );
}

export default Intro;
