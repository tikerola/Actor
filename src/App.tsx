import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Jackets } from "./pages/Jackets";
import { Shirts } from "./pages/Shirts";
import { Accessories } from "./pages/Accessories";
import { Navigation } from "./components/navigation/Navigation";
import { Home } from "./pages/Home";

export const App = (): JSX.Element => {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/jackets">
            <Jackets />
          </Route>
          <Route path="/shirts">
            <Shirts />
          </Route>
          <Route path="/accessories">
            <Accessories />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
