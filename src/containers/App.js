import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";

import Home from "./Home";
import Login from "./Login";
import Container from "../styles";

function App() {
  let logedin = useSelector((state) => state.auth.logedin);
  let token = useSelector((state) => state.auth.token);
  return (
    <Container className="App"> 
      {logedin && token ? (
        <BrowserRouter>
          <Switch>
            <Route key='home' path="/home" exact component={Home} />
            <Redirect to="/home" />
          </Switch>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Switch>
            <Route key="login" path="/login" exact component={Login} />
            <Redirect to="/login" />
          </Switch>
        </BrowserRouter>
      )}
    </Container>
  );
}

export default App;
