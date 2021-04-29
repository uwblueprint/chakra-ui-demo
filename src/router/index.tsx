import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Navbar } from "components";
import { Home, Overlays, Feedback, Tables } from "pages";

const pages = [
  { path: "/", component: Home },
  { path: "/overlays", component: Overlays },
  { path: "/feedback", component: Feedback },
  { path: "/tables", component: Tables },
];

const Router = ({ toggleTheme }: { toggleTheme: () => void }) => {
  return (
    <BrowserRouter>
      <Navbar toggleTheme={toggleTheme} />
      <Switch>
        {pages.map(({ path, component: Component }) => (
          <Route exact path={path} key={path}>
            <Component />
          </Route>
        ))}
        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
