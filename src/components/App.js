import React from "react";
import PropsValidation from "./Validation";
import IteratedStateValue from "./IteratedStateValue";
import StateSelfChange from "./StateSelfChange";
import StateSuperChange from "./StateSuperChange";

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			value: Math.round(Math.random()*100)
		};

		this.updateValue = this.updateValue.bind(this);
	}

	updateValue(randomValue) {
		this.setState({
			value: randomValue
		});
	}

	render() {
		return (
			<div>
				<hr/>
				<IteratedStateValue/>
				<hr/>
				<StateSuperChange number={this.state.value} onUpdate={this.updateValue}/>
				<hr/>
				<StateSelfChange/>
				<hr/>
				<PropsValidation title={ this.props.contentTitle } body={ this.props.contentBody }/>
				<hr/>
			</div>
		);
	}
}

App.defaultProps = {
	headerTitle: 'Default header',
	contentTitle: 'Default contentTitle',
	contentBody: 'Default contentBody'
};

export default App;