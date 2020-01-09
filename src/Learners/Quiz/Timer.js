import React, { Component } from 'react'

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ms: props.ms
        }
    }
    componentWillMount() {
        this.interval = setInterval( () => {
            if ((this.state.ms) <= 0) {
                clearInterval(this.interval);
                this.forceUpdate();
                return;
            }
            this.setState({ms: this.state.ms - 1000});
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    format() {
        const { ms } = this.state;
        let seconds = Math.floor(ms / 1000);
        let minutes = Math.floor(seconds / 60);

        minutes = minutes < 1 ? '00' : minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 1 ? '00' : seconds < 10 ? `0${seconds}` : seconds;
        return `${minutes}:${seconds}`;
    }
    render() {
        return (
            <div>{this.format(this.state.ms)}</div>
        )
    }
}

export default Timer