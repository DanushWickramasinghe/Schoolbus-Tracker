/* Bus owners can register their vehicles here, by filling a form. */

import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, message, Dropdown } from "antd";
import { registerVehicle } from "../../../apis/busOwner.api";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { getBusOwnerData } from "../../../apis/admin.api";

const { Option } = Select;

const VehicleRegistrationForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   try {
  //     getBusOwnerData().then((data) => {
  //       setUsers(data);
  //     });
  //   } catch (error) {
  //     console.error("Error fetching users:", error);
  //   }
  // }, []);

  // const handleMenuClick = (e) => {
  //   message.info("Click on menu item.");
  //   console.log("click", e);
  // };
  // const items = [
  //   {
  //     label: "1st menu item",
  //     key: "1",
  //     icon: <UserOutlined />,
  //   },
  //   {
  //     label: "2nd menu item",
  //     key: "2",
  //     icon: <UserOutlined />,
  //   },
  //   {
  //     label: "3rd menu item",
  //     key: "3",
  //     icon: <UserOutlined />,
  //     danger: true,
  //   },
  //   {
  //     label: "4rd menu item",
  //     key: "4",
  //     icon: <UserOutlined />,
  //     danger: true,
  //     disabled: true,
  //   },
  // ];
  // const menuProps = {
  //   items,
  //   onClick: handleMenuClick,
  // };

  const onFinish = (values) => {
    console.log(values);
    setLoading(true);
    registerVehicle(values)
      .then((data) => {
        console.log(data);
        setLoading(false);
        message.success("Vehicle registration successful");
        form.resetFields(); // Reset the form fields
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        setLoading(false);
        message.error("Vehicle registration failed");
      });
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
          name="owner_name"
          rules={[{ required: true, message: "Please enter the owner's name" }]}
        >
          {/* <Dropdown.Button
            menu={menuProps}
            placement="bottom"
            icon={<UserOutlined />}
          >
            Choose name of the vehicle owner
          </Dropdown.Button> */}
          <Input placeholder="Enter Owner Name" />
        </Form.Item>

        <Form.Item
          label="NIC Number of the owner"
          name="owner_NIC_number"
          rules={[{ required: true, message: "Please enter the NIC number" }]}
        >
          <Input placeholder="Enter NIC number" />
        </Form.Item>

        <Form.Item
          label="Type of Vehicle"
          name="vehicle_type"
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
          name="vehicle_model"
          rules={[
            { required: true, message: "Please enter the vehicle model" },
          ]}
        >
          <Input placeholder="Enter vehicle model" />
        </Form.Item>

        <Form.Item
          label="Vehicle Number"
          name="vehicle_number"
          rules={[
            { required: true, message: "Please enter the vehicle number" },
          ]}
        >
          <Input placeholder="Enter vehicle number" />
        </Form.Item>

        <Form.Item
          label="Starting Location"
          name="starting_location"
          rules={[
            { required: true, message: "Please enter the Starting location" },
          ]}
        >
          <Input placeholder="Enter start location" />
        </Form.Item>

        <Form.Item
          label="End Location"
          name="end_location"
          rules={[
            { required: true, message: "Please enter the ending location" },
          ]}
        >
          <Input placeholder="Enter end location" />
        </Form.Item>

        <Form.Item
          label="Covered Cities"
          name="covered_cities"
          rules={[
            {
              required: true,
              message: "Please enter all the covered cities",
            },
          ]}
        >
          <Input placeholder="Enter covered cities" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Register Vehicle
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default VehicleRegistrationForm;
