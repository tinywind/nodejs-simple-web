import React from "react";

class StateExample extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			header: "Header Initial state",
			content: "Content Initial State"
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
				<h1>{this.state.header}</h1>
				<h2>{this.state.content}</h2>
				<button onClick={this.updateHeader}>Button 1</button>
				<button onClick={this.updateHeader}>Button 2</button>
			</div>
		);
	}
}

export default StateExample;