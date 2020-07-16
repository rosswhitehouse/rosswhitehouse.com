import React from 'react';

const Panel = (props) => {
    return (
        <div className={'panel'}>
            {props.panel.html && <div dangerouslySetInnerHTML={{ __html: props.panel.html }} />}
        </div>
    );
}

export default Panel;
