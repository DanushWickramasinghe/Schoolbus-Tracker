import React, { useState } from "react";
import { Card, Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { verifyRegisterOtp } from "../../apis/auth.api";

// Verifies the OTP sent to the email.
const OTPVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(null);
  const [loading, setLoading] = useState(false);
  const [otpForm] = Form.useForm();
  const [passwordForm] = Form.useForm();

  const onFinishOTP = (values) => {
    setOtp(values.otp);
  };

  const onFinishPassword = (values) => {
    setLoading(true);
    verifyRegisterOtp({ otp, password: values.password })
      .then((data) => {
        if (data.message === "User registered successfully") {
          message.success("Password set successfully!");
          setLoading(false);
          navigate("/login");
          return;
        }
        if (data.response.data.message) {
          if (data.response.data.message === "Invalid OTP") {
            message.error("OTP is incorrect!");
            setOtp(null);
            setLoading(false);
            otpForm.resetFields();
            passwordForm.resetFields();
            return;
          }
          if (data.response.data.message === "OTP expired") {
            message.error("OTP is expired!");
            navigate("/register");
            setLoading(false);
            return;
          }
        }
        message.error("Error setting password!");
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error setting password:", error);
        setLoading(false);
      });
  };

  return (
    <div>
      {otp === null ? (
        <Card
          title="Verify OTP"
          style={{ width: 600, margin: "auto", marginTop: "200px" }}
        >
          <Form
            form={otpForm}
            name="verify-otp"
            initialValues={{ remember: true }}
            onFinish={onFinishOTP}
          >
            <Form.Item
              label="OTP"
              name="otp"
              rules={[
                {
                  required: true,
                  message: "Please input your OTP!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Verify OTP
              </Button>
            </Form.Item>
          </Form>
        </Card>
      ) : (
        <Card
          title="Set New Password"
          style={{ width: 600, margin: "auto", marginTop: "200px" }}
        >
          <Form
            form={passwordForm}
            name="set-password"
            initialValues={{ remember: true }}
            onFinish={onFinishPassword}
          >
            <Form.Item
              label="New Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your new password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please confirm your new password!",
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
              <Button type="primary" htmlType="submit" loading={loading}>
                Set Password
              </Button>
            </Form.Item>
          </Form>
        </Card>
      )}
    </div>
  );
};

export default OTPVerification;
