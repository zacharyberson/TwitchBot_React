import React from 'react';

class Audio extends React.Component {
    // called on first RenderDOM.render
    constructor(props) {
        super(props);
        this.state = {
            played: false
        };
        this.setEnded = this.setEnded.bind(this);
    }

    // called on subsequent RenderDOM.render
    componentWillReceiveProps(nextProps) {
        this.setState((state, props) => {
            return { played: false };
        });
    }

    componentDidMount() {};
    componentWillUnmount() {};

    render() {
        if(this.state.played) {
            return (<div></div>);
        } else {
            return (
                <audio autoPlay onEnded={this.setEnded}>
                    <source src={this.props.source} volume={this.props.volume}/>
                </audio>
            );
        }
    }

    setEnded() {
        console.log('fired');
        this.setState((state, props) => {
            return { played: true };
        });
    }
}

export default Audio;