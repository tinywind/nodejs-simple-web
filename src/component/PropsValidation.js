import React from "react";

class PropsValidation extends React.Component {
	render() {
		return (
			<div>
				<p>{ this.props.title }</p>
				<p>{ this.props.body }</p>
			</div>
		);
	}
}

PropsValidation.propTypes = {
	title: React.PropTypes.string,
	body: React.PropTypes.string.isRequired
	/* If body is null, see error on your browser console */
};

/** VALIDATION SAMPLE
 PropsValidation.propTypes = {

	// JS primitive types
	optionalArray: React.PropTypes.array,
	optionalBool: React.PropTypes.bool,
	optionalFunc: React.PropTypes.func,
	optionalNumber: React.PropTypes.number,
	optionalObject: React.PropTypes.object,
	optionalString: React.PropTypes.string,

	// anything that can be rendered ( numbers, string, elements, array, fragment)
	optionalNode: React.PropTypes.node,

	// React element
	optionalElement: React.PropTyps.element,

	// instance of specific class
	optionalMessage: React.PropTypes.instanceOf(Message),

	// limited to specific values
	optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

	// one of many types
	optionalUnion: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.propTypes.number
	]),

	// array of specific type
	optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

	// object with property values of a certain type
	optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

	// object with particular shape
	optionalObjectWithShape: React.PropTypes.shape({
		color: React.PropTypes.string,
		fontSize: React.PropTypes.number
	}),

	// Required function
	requiredFunc: React.PropTypes.func.isRequired,

	// Required prop with any data type
	requiredAny: React.PropTypes.any.isRequired,

	// custom validator
	customProp: function (props, propName, componentName) {
		if (!/matchme/.test(props[propName])) {
			return new Error('PropsValidation failed!');
		}
	}
};
 */
export default PropsValidation;