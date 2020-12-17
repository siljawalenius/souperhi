import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom"
import About from "./about"
import App from "../App"
import AllSoups from "./allSoups"

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/all" component={AllSoups}></Route>
            <Route component={App}></Route>
        </Switch>
    </BrowserRouter>

);

export default Router;