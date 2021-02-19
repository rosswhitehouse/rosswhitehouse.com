import React from 'react';

const Panel = (props) => {
    const isNesTheme = props.theme === 'nes';
    return (
        <div className='panel'>
            {props.panel.html && (
                <div className={isNesTheme ? 'nes-container is-rounded' : ''}>
                    <div dangerouslySetInnerHTML={{ __html: props.panel.html }} />
                </div>
            )}
        </div>
    );
}

export default Panel;
