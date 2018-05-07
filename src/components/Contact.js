import React from 'react';
import TwitterSVG from './svgs/TwitterSVG';
import InstagramSVG from './svgs/InstagramSVG';
import CodepenSVG from './svgs/CodepenSVG';
import MailSVG from './svgs/MailSVG';
import GithubSVG from './svgs/GithubSVG';
import MediumSVG from './svgs/MediumSVG';

const Contact = () => {
    return (
        <div className="contact">
            <div className="icons">
                <a href="https://twitter.com/RossWhitehouse"><TwitterSVG /></a>
                <a href="https://www.instagram.com/ross.dw/"><InstagramSVG /></a>
                <a href="https://www.codepen.io/rossdw"><CodepenSVG /></a>
                <a href="mailto:ross.dw@live.com"><MailSVG /></a>
                <a href="https://github.com/rosswhitehouse"><GithubSVG /></a>
                <a href="https://medium.com/@RossWhitehouse"><MediumSVG /></a>
            </div>
        </div>
    )
}

export default Contact;
