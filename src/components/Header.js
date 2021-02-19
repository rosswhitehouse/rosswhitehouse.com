import React from 'react';
import Intro from '../components/Intro';

const Header = ({ theme }) => {
    return (
        <header className="header panel">
            <Intro theme={theme} />
        </header>
    );
}

export default Header;
