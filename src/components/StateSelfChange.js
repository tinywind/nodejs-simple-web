import React from "react";

class StateSelfChange extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			header: "Initial state"
		};

		this.updateHeader = this.updateHeader.bind(this);
	}

	updateHeader(e) {
		this.setState({
			header: "Clicked: " + e.target.textContent
		});
	}

	render() {
		return (
			<div>
				<h3>StateSelfChange</h3>
				<p>{this.state.header}</p>
				{/* same: <button onClick={this.updateHeader.bind(this)}>Button 1</button> */}
				<button onClick={this.updateHeader}>Button 1</button>
				<button onClick={this.updateHeader}>Button 2</button>
			</div>
		);
	}
}

export default StateSelfChange;