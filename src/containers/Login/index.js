import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import S from '../../styles/Login';

function Login(props) {
  const [access, setAccess] = useState(false);
  const url = "http://test-alpha.reestrdoma.ru/api/login/";

  useEffect(() => {
    if (access) {
      props.history.replace("/homes");
    }
  }, [access]);

  const getAccess = async (url, body) => {
    try {
      let res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        setAccess(true);
        let {data} = await res.json();
        console.log(data);
        localStorage.setItem('token',data.token.access)
        return data;
      } else {
        setAccess(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formHandler = async (values) => {
     getAccess(url, values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <S.login>
      <Form onFinish={formHandler} name="basic" onFinishFailed={onFinishFailed}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Username"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </S.login>
  );
}

export default Login;
