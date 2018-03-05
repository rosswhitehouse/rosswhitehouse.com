import React from 'react';

export default class Typing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            printedString: ''
        }

        this.render.type = this.render.type.bind(this);
    }

    render() {
        const string = this.props.string;
        let i = 0;

        function type() {
            if (i < string.length) {
                let newState = this.state.printedString + string.charAt(i);
                this.setState({
                    printedString: newState
                })
                setTimeout(type(string, i++), 100);
            }
        }

        type();

        return (
            <span className="typing">{this.state.printedString}</span>
        )
    }
}
