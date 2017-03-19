import React from "react";
import {connect} from "react-redux";

class Counter extends React.Component {
    render() {
        return (
            <h1>VALUE: { this.props.value }</h1>
        );
    }
}

export default connect(state => Object.freeze({
    value: state.counter.value
}))(Counter);