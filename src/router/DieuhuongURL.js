import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Calculator from "../components/calculator/Calculator";
import Todos from "../components/todosapp/Todos";
import Quotes from './../components/randomquote/RandomQuote';

const DieuhuongURL = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Calculator">
          <Calculator/>
        </Route>
        <Route exact path="/Todos">
          <Todos/>
        </Route> 
        <Route exact path="/quotes">
          <Quotes/>
        </Route> 
      </Switch>
    </div>
  );
};

export default DieuhuongURL;
