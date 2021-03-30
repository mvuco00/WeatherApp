import React from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
