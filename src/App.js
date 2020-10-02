import React, { Component } from "react";
import "./App.css";
import "./bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import {NotFound} from "./pages/NotFound"

class App extends Component {
  render() {
   

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Details/:movieId" component={Details} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
