import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Cart from "./components/Cart/Cart";
import App from "./App"
import  NavbarComponent  from "./components/Navbar/NavbarComponent";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
      <NavbarComponent/>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/cart" component={Cart} />
      </Switch>
  </Router>
);

export default AppRouter;
