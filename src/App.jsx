import React, {Component} from "react";
import {BrowserRouter as Router, Link, Route, Routes, useParams} from "react-router";
import UsingReduxPage from "./page/UsingReduxPage";
import FunctionalComponentPage from "./page/FunctionalComponentPage";
import UsingRef from "./page/UsingRef";
import IteratedStateValue from "./page/IteratedStateValue";
import StateSuperChangePage from "./page/StateSuperChangePage";
import StateSelfChange from "./page/StateSelfChange";
import PropsValidationPage from "./page/PropsValidationPage";
import Topic from "./page/Topic";
import NotFound from "./page/NotFound";
import logo from "./logo.svg";
import "./App.css";

const PathValue = () => <div>{useParams().pathValue}</div>;

class App extends Component {
    render() {
        return (
            <Router basename={import.meta.env.BASE_URL}>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <ul>
                            <li><Link to="/using-redux">UsingRedux</Link></li>
                            <li><Link to="/functional-component">FunctionalComponent</Link></li>
                            <li><Link to="/using-ref">UsingRef</Link></li>
                            <li><Link to="/iterated-state-value">IteratedStateValue</Link></li>
                            <li><Link to="/state-super-change">StateSuperChange</Link></li>
                            <li><Link to="/state-self-change">StateSelfChange</Link></li>
                            <li><Link to="/props-validation">PropsValidation</Link></li>
                            <li>
                                <hr/>
                            </li>
                            <li><Link to="/topic">Topic</Link></li>
                            <li><Link to="/incorrect-page">incorrect page</Link></li>
                            <li>
                                <hr/>
                            </li>
                            <li><Link to="/path-value/abc">path-value/abc</Link></li>
                            <li><Link to="/path-value/efgaa">path-value/efgaa</Link></li>
                        </ul>
                    </div>
                    <div className="App-intro">

                        <Routes>
                            <Route path="/" element={<h2>ROOT</h2>}/>
                            <Route path='/using-redux/*' element={<UsingReduxPage/>}/>
                            <Route path='/functional-component/*' element={<FunctionalComponentPage/>}/>
                            <Route path='/using-ref/*' element={<UsingRef/>}/>
                            <Route path='/iterated-state-value/*' element={<IteratedStateValue/>}/>
                            <Route path='/state-super-change/*' element={<StateSuperChangePage/>}/>
                            <Route path='/state-self-change/*' element={<StateSelfChange/>}/>
                            <Route path='/props-validation/*' element={<PropsValidationPage/>}/>
                            <Route path='/topic/*' element={<Topic/>}/>
                            <Route path='/path-value/:pathValue/*' element={<PathValue/>}/>
                            <Route path='*' element={<NotFound/>}/>
                        </Routes>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;