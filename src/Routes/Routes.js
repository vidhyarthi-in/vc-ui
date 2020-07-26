import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import {Login} from "../views/Login";
import {JoinMeet} from "../views/JoinMeet";

const createBrowserHistory = require("history").createBrowserHistory;
const customHistory = createBrowserHistory();

export const AppRouter = () => {
    return (
        <div className="">
            <Router history={customHistory}>
                <Switch>
                    <Route path="/login" exact={true} component={Login}/>
                    <Route path="/" exact={true} component={JoinMeet} />
                </Switch>
            </Router>
        </div>
    )
}
