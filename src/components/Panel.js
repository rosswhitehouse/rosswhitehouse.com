import React from 'react';

const Panel = (props) => {
    const colour = props.panel.colour;
    const colourClass = colour ? `panel--${colour}` : '';
    return (
        <div className={`panel ${colourClass}`}>
            {props.panel.content && <div dangerouslySetInnerHTML={{ __html: props.panel.content.childMarkdownRemark.html }} />}
        </div>
    );
}

export default Panel;
