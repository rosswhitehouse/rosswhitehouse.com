import React from 'react';

import Panel from './Panel';

const Main = (props) => {
    const renderPanels = props.panels.map((panel) => {
        return <Panel theme={props.theme} key={panel.node.frontmatter.id} panel={panel.node} />
    })
    return (
        <>
            {renderPanels}
        </>
    );
}

export default Main;
