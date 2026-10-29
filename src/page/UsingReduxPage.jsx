import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import counterApp from "../component/using-redux/combineReducer";
import Counter from "../component/using-redux/Counter";
import Buttons from "../component/using-redux/Buttons";
import Option from "../component/using-redux/Option";

const UsingReduxPage = () => {
    return (
        <Provider store={createStore(counterApp)}>
            <div style={ {textAlign: 'center'} }>
                <Counter/>
                <Option/>
                <Buttons/>
            </div>
        </Provider>
    );
};

export default UsingReduxPage;