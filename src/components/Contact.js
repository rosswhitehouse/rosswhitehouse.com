import React from 'react';
import TwitterSVG from './svgs/TwitterSVG';
import InstagramSVG from './svgs/InstagramSVG';
import CodepenSVG from './svgs/CodepenSVG';
import MailSVG from './svgs/MailSVG';
import GithubSVG from './svgs/GithubSVG';
import MediumSVG from './svgs/MediumSVG';

const Contact = ({ theme }) => {
    const isNesTheme = theme === 'nes';
    return (
        <div className="contact">
            <div className="icons">
                <a href="https://twitter.com/RossWhitehouse" aria-label="Twitter">
                    {isNesTheme ? <i className="nes-icon twitter is-large"></i> : <TwitterSVG />}
                </a>
                <a href="https://www.instagram.com/ross.dw/" aria-label="Instagram">
                    {isNesTheme ? <i className="nes-icon instagram is-large"></i> : <InstagramSVG />}
                </a>
                <a href="https://www.codepen.io/rossdw" aria-label="Codepen"><CodepenSVG /></a>
                <a href="mailto:ross.dw94@gmail.com" aria-label="Email">
                    {isNesTheme ? <i className="nes-icon gmail is-large"></i> : <MailSVG />}
                </a>
                <a href="https://github.com/rosswhitehouse" aria-label="Github">
                    {isNesTheme ? <i className="nes-icon github is-large"></i> : <GithubSVG />}
                </a>
                <a href="https://medium.com/@RossWhitehouse" aria-label="Medium">
                    {isNesTheme ? <i className="nes-icon medium is-large"></i> : <MediumSVG />}
                </a>
            </div>
        </div>
    )
}

export default Contact;
