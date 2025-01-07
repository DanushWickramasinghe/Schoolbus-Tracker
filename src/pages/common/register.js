import React, { useState } from "react";
import {
  Card,
  Form,
  Input,
  Button,
  DatePicker,
  message,
  Flex,
  Radio,
} from "antd";
import { registerData } from "../../apis/auth.api";
import { useNavigate } from "react-router-dom";

const radioOptions = [
  {
    label: "Driver",
    value: "DRIVER",
  },
  {
    label: "Passenger",
    value: "PASSENGER",
  },
];

const RegisterPage = ({ title }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    registerData(values)
      .then((data) => {
        if (data === "User already exists") {
          message.error("User already exists!");
          setLoading(false);
          return;
        }
        message.success(
          "Enter the OTP sent to your email to verify your account!"
        );
        setLoading(false);
        navigate("/verify-otp");
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        setLoading(false);
      });
  };

  return (
    <Card>
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "50px" }}>
        <h2 style={{ textAlign: "center" }}>{title}</h2>
        <Form
          name="register"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "The input is not a valid email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mobile Number"
            name="mobile_number"
            rules={[
              {
                required: true,
                message: "Please input your mobile number!",
              },
              {
                pattern: /^[0-9]{10}$/,
                message: "Please input a valid mobile number!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Date of Birth"
            name="date_of_birth"
            rules={[
              {
                required: true,
                message: "Please input your date of birth!",
              },
            ]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Please select your role!" }]}
          >
            <Flex vertical gap="middle">
              <Radio.Group
                block
                options={radioOptions}
                defaultValue="DRIVER"
                optionType="button"
                buttonStyle="solid"
              />
            </Flex>
          </Form.Item>

          {/* <Form.Item
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
        </Form.Item> */}

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Card>
  );
};

export default RegisterPage;
