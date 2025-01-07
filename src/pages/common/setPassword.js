import React, { useState } from "react";
import { Card, Form, Input, Button, Checkbox, message } from "antd";

const setPasswordPage = () => {
  // const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    // Insert on Finish functionality.
  };

  return (
    <div>
      <Card
        title="Set Password"
        style={{ width: 600, margin: "auto", marginTop: "200px" }}
      >
        <Form
          name="setPassword"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Set Password
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default setPasswordPage;
