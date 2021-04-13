import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import {useDispatch} from 'react-redux'

import axios from "../../utils/axios";
import S from "../../styles/Login";
import {login} from '../../store/auth/actions'

function Login(props) {

  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const getAccess = (data) => {
    const url = "/login/";

    axios
      .post(url, data)
      .then(({ data }) => {
        dispatch(login(data.data.user,data.data.token.access));
        localStorage.setItem("token", data.data.token.access);
      })
      .then(() => {
        props.history.replace("/home");
      })
      .catch(() => setError(true));
  };

  const formHandler = (values) => {
    getAccess(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <S.Login>
      <h1>Sign in</h1>
        <Form
          className="form"
          onFinish={formHandler}
          name="basic"
          onFinishFailed={onFinishFailed}
        >
          <label className="form__title">Email address</label>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input className="form__input" placeholder="Enter your email" />
          </Form.Item>
          <label className="form__title">Password</label>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password className="form__input" placeholder="Enter your password" />
          </Form.Item>
          <p className={`form__err-message ${error?'form__err-message--active':''}`}>Incorrect username or password.</p>
          <Button className="form__btn" type="primary" htmlType="submit">
            Sign in
          </Button>
        </Form>
    </S.Login>
  );
}

export default Login;
