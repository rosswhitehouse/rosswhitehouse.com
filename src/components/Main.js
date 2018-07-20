import React from 'react';

import Panel from './Panel';

const Main = (props) => {
    const renderPanels = props.panels.map((panel) => {
        return <Panel key={panel.node.id} panel={panel.node} />
    })
    return (
        <div>
            {renderPanels}
        </div>
    );
}

export default Main;
