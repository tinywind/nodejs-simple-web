import React from "react";

function NestedFunctionalComponent(props) {
    return (
        <div>name: {props.name}</div>
    );
}

const FunctionalComponent = ({name}) => {
    return (
        <div>
            <div>name: {name}</div>
            <NestedFunctionalComponent name="NestedFunctionalComponent"/>
        </div>
    );
};

export default FunctionalComponent;