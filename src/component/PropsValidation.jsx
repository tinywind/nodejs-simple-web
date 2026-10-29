import React from "react";
import PropTypes from "prop-types";

class PropsValidation extends React.Component {
    render() {
        PropTypes.checkPropTypes(PropsValidation.propTypes, this.props, "prop", "PropsValidation");
        return (
            <div>
                <p>{ this.props.title }</p>
                <p>{ this.props.body }</p>
            </div>
        );
    }
}

PropsValidation.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string.isRequired
    /* If body is null, see error on your browser console */
};

/** VALIDATION SAMPLE
 PropsValidation.propTypes = {

	// JS primitive types
	optionalArray: PropTypes.array,
	optionalBool: PropTypes.bool,
	optionalFunc: PropTypes.func,
	optionalNumber: PropTypes.number,
	optionalObject: PropTypes.object,
	optionalString: PropTypes.string,

	// anything that can be rendered ( numbers, string, elements, array, fragment)
	optionalNode: PropTypes.node,

	// React element
	optionalElement: React.PropTyps.element,

	// instance of specific class
	optionalMessage: PropTypes.instanceOf(Message),

	// limited to specific values
	optionalEnum: PropTypes.oneOf(['News', 'Photos']),

	// one of many types
	optionalUnion: PropTypes.oneOfType([
		PropTypes.string,
		React.propTypes.number
	]),

	// array of specific type
	optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

	// object with property values of a certain type
	optionalObjectOf: PropTypes.objectOf(PropTypes.number),

	// object with particular shape
	optionalObjectWithShape: PropTypes.shape({
		color: PropTypes.string,
		fontSize: PropTypes.number
	}),

	// Required function
	requiredFunc: PropTypes.func.isRequired,

	// Required prop with any data type
	requiredAny: PropTypes.any.isRequired,

	// custom validator
	customProp: function (props, propName, componentName) {
		if (!/matchme/.test(props[propName])) {
			return new Error('PropsValidation failed!');
		}
	}
};
 */
export default PropsValidation;