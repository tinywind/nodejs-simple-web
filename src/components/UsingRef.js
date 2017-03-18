import React from "react";

class UsingRef extends React.Component {
	handleClick() {
		this.input.value = "initialized";
		this.input.focus();
	}

	render() {
		return (
			<div>
				<h3>UsingRef</h3>
				<input ref={newValue => this.input = newValue}/>
				<button onClick={this.handleClick.bind(this)}>Click Me</button>
			</div>
		);
	}
}

export default UsingRef;