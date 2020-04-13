import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./components/App";

const initApp = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </div>
  );
};
export default initApp;
