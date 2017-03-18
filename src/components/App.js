import React from "react";
import PropsValidation from "./Validation";
import FunctionalComponent from "./FunctionalComponent";
import IteratedStateValue from "./IteratedStateValue";
import UsingRef from "./UsingRef";
import StateSelfChange from "./StateSelfChange";
import StateSuperChange from "./StateSuperChange";

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			value: Math.round(Math.random() * 100)
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
				<Title title="FunctionalComponent"/>
				<FunctionalComponent name="FunctionalComponent"/>

				<Title title="UsingRef"/>
				<UsingRef/>

				<Title title="IteratedStateValue"/>
				<IteratedStateValue/>

				<Title title="StateSuperChange"/>
				<StateSuperChange number={this.state.value} onUpdate={this.updateValue}/>

				<Title title="StateSelfChange"/>
				<StateSelfChange/>

				<Title title="PropsValidation"/>
				<PropsValidation title={ this.props.contentTitle } body={ this.props.contentBody }/>
			</div>
		);
	}
}

class Title extends React.Component {
	render() {
		return (
			<div>
				<hr/>
				<h3>{this.props.title}</h3>
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