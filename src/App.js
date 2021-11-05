import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home"
import LogIn from "./components/LogIn/logIn"
import SignIn from "./components/SignIn/signIn";
import Logout from "./components/LogOut/logOut";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/logowanie/" component={LogIn} />
            <Route exact path="/rejestracja" component={SignIn} />
            <Route exact path="/wylogowano" component={Logout} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
