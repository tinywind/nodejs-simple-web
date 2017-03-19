import React, {Component} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import "./App.css";
import FunctionalComponentPage from "./page/FunctionalComponentPage";
import UsingRef from "./page/UsingRef";
import IteratedStateValue from "./page/IteratedStateValue";
import StateSuperChangePage from "./page/StateSuperChangePage";
import StateSelfChange from "./page/StateSelfChange";
import PropsValidationPage from "./page/PropsValidationPage";
import Topic from "./page/Topic";
import NotFound from "./page/NotFound";
import logo from "./logo.svg";

class App extends Component {


    render() {
        return (
            <Router>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <ul>
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
                            <li><Link to="/path-value/1">path-value/1</Link></li>
                            <li><Link to="/path-value/abc">path-value/abc</Link></li>
                            <li><Link to="/path-value/efgaa">path-value/efgaa</Link></li>
                        </ul>
                    </div>
                    <div className="App-intro">

                        <Switch>
                            <Route exact={true} path="/" render={() => (
                                <h2>ROOT</h2>
                            )}/>
                            <Route path='/functional-component' component={FunctionalComponentPage}/>
                            <Route path='/using-ref' component={UsingRef}/>
                            <Route path='/iterated-state-value' component={IteratedStateValue}/>
                            <Route path='/state-super-change' component={StateSuperChangePage}/>
                            <Route path='/state-self-change' component={StateSelfChange}/>
                            <Route path='/props-validation' component={PropsValidationPage}/>
                            <Route path='/topic' component={Topic}/>
                            <Route path='/path-value/:pathValue' render={({match}) => (
                                <div>
                                    {match.params.pathValue}
                                </div>
                            )}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;