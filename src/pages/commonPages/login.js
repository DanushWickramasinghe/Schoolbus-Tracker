import React, { useState } from 'react';
import { Card, Form, Input, Button, Checkbox } from 'antd';
import { login, verifyRegisterOtp } from '../../apis/auth.api';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    console.log('Success:', values);
    setLoading(true);
    login(values)
      .then((data) => {
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        setLoading(false);
      });

    console.log(values);
  };

  return (
    <Card
      title='Login'
      style={{ width: 600, margin: 'auto', marginTop: '200px' }}
    >
      <Form name='login' initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name='remember' valuePropName='checked'>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit' loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginPage;
