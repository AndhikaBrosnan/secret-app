import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "../component/App.js";
import Dashboard from "../component/Dashboard";
import Journal from "../component/Journal";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={App} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/journal" exact component={Journal} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
