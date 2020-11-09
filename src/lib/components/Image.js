import React from 'react';

class Image extends React.Component {
    // called on first RenderDOM.render
    constructor(props) {
        super(props);
        this.state = {
            display: true
        };
        this.queueDisableView = this.queueDisableView.bind(this);
        this.toggleView = this.toggleView.bind(this);
    }

    // called on subsequent RenderDOM.render
    componentWillReceiveProps(nextProps) {
        this.toggleView(true);
        this.queueDisableView(this.props.timeout);
    }

    componentDidMount() {
        this.toggleView(true);
        this.queueDisableView(this.props.timeout);
    };

    componentWillUnmount() { };

    render() {
        if (this.state.display) {
            return (
                <img height={this.props.height} src={this.props.source} />
            );
        } else {
            return (<div></div>);
        }
    }

    queueDisableView(timeout) {
        setTimeout(() => {
            this.toggleView(false);
        }, timeout);
    }

    toggleView(display) {
        this.setState((state, props) => {
            return { display: display };
        });
    }
}

export default Image;