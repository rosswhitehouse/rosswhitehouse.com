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
                <a href="https://twitter.com/RossWhitehouse" aria-label="Twitter"><TwitterSVG /></a>
                <a href="https://www.instagram.com/ross.dw/" aria-label="Instagram"><InstagramSVG /></a>
                <a href="https://www.codepen.io/rossdw" aria-label="Codepen"><CodepenSVG /></a>
                <a href="mailto:ross.dw94@gmail.com" aria-label="Email"><MailSVG /></a>
                <a href="https://github.com/rosswhitehouse" aria-label="Github"><GithubSVG /></a>
                <a href="https://medium.com/@RossWhitehouse" aria-label="Medium"><MediumSVG /></a>
            </div>
        </div>
    )
}

export default Contact;
