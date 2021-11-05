import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home"
import Social from "./components/Social/socialSection";
import LogIn from "./components/LogIn/logIn"
import SignIn from "./components/SignIn/signIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
            <Route path="/logowanie/" component={LogIn} />
            <Route path="/rejestracja" component={SignIn} />
        </Switch>
        {/*<Social />*/}
      </BrowserRouter>
    </>
  );
}

export default App;
