import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom"
import About from "./about"


import AllSoups from "./allSoups"
import SingleSoup from "./singleSoup"

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SingleSoup}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/all" component={AllSoups}></Route>
            <Route component={SingleSoup}></Route>
        </Switch>
    </BrowserRouter>

);

export default Router;

//how to get proper soup data to soups/ 
//best option is probably an API
//still to do: 
// finish soup drawings
// add recipe data onto api 