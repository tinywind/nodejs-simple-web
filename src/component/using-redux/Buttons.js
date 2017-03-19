import React from "react";
import {connect} from "react-redux";
import {increment, decrement} from "./action";

class Buttons extends React.Component {
    render() {
        return (
            <div>
                <button type="button" onClick={ this.props.onIncrement }>+</button>
                <button type="button" onClick={ this.props.onDecrement }>-</button>
            </div>
        )
    }
}

export default connect(undefined, dispatch => Object.freeze({
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
}))(Buttons);