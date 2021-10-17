import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home"
import Social from "./components/Social/socialSection";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Social />
      </BrowserRouter>
    </>
  );
}

export default App;
