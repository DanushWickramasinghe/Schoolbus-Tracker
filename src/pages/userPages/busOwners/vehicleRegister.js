/* Bus owners can register their vehicles here, by filling a form. */

import React from "react";
import { Form, Input, Button, Select } from "antd";

const { Option } = Select;

const VehicleRegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Submitted:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.error("Form Submission Failed:", errorInfo);
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "50px" }}>
      <h2 style={{ textAlign: "center" }}>Vehicle Registration</h2>
      <Form
        form={form}
        name="vehicle-registration"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name of the owner"
          name="ownerName"
          rules={[{ required: true, message: "Please enter the owner's name" }]}
        >
          <Input placeholder="Enter owner's full name" />
        </Form.Item>

        <Form.Item
          label="NIC Number of the owner"
          name="NICnumber"
          rules={[{ required: true, message: "Please enter the NIC number" }]}
        >
          <Input placeholder="Enter NIC number" />
        </Form.Item>

        <Form.Item
          label="Type of Vehicle"
          name="vehicleType"
          rules={[
            { required: true, message: "Please select the vehicle type" },
          ]}
        >
          <Select placeholder="Select vehicle type">
            <Option value="van">Van</Option>
            <Option value="bus - 24 seater">Bus - 24 seater</Option>
            <Option value="bus - 52 seater">Bus - 52 seater</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Vehicle Model"
          name="vehicleModel"
          rules={[
            { required: true, message: "Please enter the vehicle model" },
          ]}
        >
          <Input placeholder="Enter vehicle model" />
        </Form.Item>

        <Form.Item
          label="Vehicle Number"
          name="vehicleNumber"
          rules={[
            { required: true, message: "Please enter the vehicle number" },
          ]}
        >
          <Input placeholder="Enter vehicle number" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Register Vehicle
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default VehicleRegistrationForm;
