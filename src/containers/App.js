import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";

import routes from "../routes";
import Homes from "./Homes/index";
import Login from "./Login/index";
import ErrorPage from "./ErrorPage";
import Container from "../styles";

function App() {
  let logined = useSelector((state) => state.auth.logined);
  console.log(logined, "logiiiiiinnnnn apppp");

  return (
    <Container className="App">
      {logined && localStorage.token ? (
        <BrowserRouter>
          <Switch>
            <Route key='homes' path="/homes" exact component={Homes} />
            {/* <Route key='error' path="/error" exact={true} component={ErrorPage} /> */}
            <Redirect to="/homes" />
          </Switch>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Switch>
            <Route key="login" path={"/login"} exact component={Login} />
            {/* <Route key="login" path={"*"} exact component={Login} /> */}
            <Redirect to="/login" />
          </Switch>
        </BrowserRouter>
      )}
    </Container>
  );
}

export default App;
