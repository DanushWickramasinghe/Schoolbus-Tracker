import React, { useState } from 'react';
import { Card, Form, Input, Button, Checkbox, Alert } from 'antd';
import { login, verifyRegisterOtp } from '../../apis/auth.api';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    login(values)
      .then((data) => {
        if (data === 'Invalid credentials') {
          console.log('Invalid credentials');
          return;
        }
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        setLoading(false);
      });
  };

  return (
    <div>
      <Card
        title='Login'
        style={{ width: 600, margin: 'auto', marginTop: '200px' }}
      >
        <Form
          name='login'
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label='Email'
            name='email'
            rules={[{ required: true, message: 'Please input your Email!' }]}
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

          {/* <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

          <Form.Item>
            <Button type='primary' htmlType='submit' loading={loading}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {/* <Alert message='Invalid credentials' type='error' showIcon /> */}
    </div>
  );
};

export default LoginPage;
