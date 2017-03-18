import React from "react";
import PropsValidation from "./components/Validation";
import FunctionalComponent from "./components/FunctionalComponent";
import IteratedStateValue from "./components/IteratedStateValue";
import UsingRef from "./components/UsingRef";
import StateSelfChange from "./components/StateSelfChange";
import StateSuperChange from "./components/StateSuperChange";
import logo from "./logo.svg";
import "./App.css";

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
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h2>Welcome to React</h2>
				</div>

				<div className="App-intro">
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