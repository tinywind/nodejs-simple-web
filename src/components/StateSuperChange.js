import React from "react";

class StateSuperChange extends React.Component {
	updateNumber() {
		let value = Math.round(Math.random() * 100);
		this.props.onUpdate(value);
	}

	constructor(props) {
		super(props);
		this.updateNumber = this.updateNumber.bind(this);
	}

	render() {
		return (
			<div>
				<h3>StateSuperChange</h3>
				<p>RANDOM NUMBER: { this.props.number }</p>
				<button onClick={this.updateNumber}>Randomize</button>
			</div>
		);
	}
}

export default StateSuperChange;