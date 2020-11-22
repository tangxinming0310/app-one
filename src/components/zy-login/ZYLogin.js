import React, { useState } from "react";

import { Form, Input, Button, message } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const ZYLogin = () => {
  
  const [form] = Form.useForm();

  const [formLayout] = useState('vertical')

  const onFinish = (values) => {
    console.log('Success:', values);
    message.info(JSON.stringify(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      layout={formLayout}
      name="basic"
      form={form}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{width: '360px'}}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '360px' }}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ZYLogin;