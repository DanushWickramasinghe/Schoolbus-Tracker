/* Admin access to manage any user, who uses the application */

import React, { useState, useEffect } from "react";
import { Card, Space, Table, Button } from "antd";
import {
  getBusOwnerData,
  getPassengerData,
  getAdminData,
} from "../../apis/admin.api";

const ManageUsers = () => {
  const [busOwnerData, setBusOwnerData] = useState([]);
  const [passengerData, setPassengerData] = useState([]);
  const [adminData, setAdminData] = useState([]);
  const [activeTabKey1, setActiveTabKey1] = useState("BusOwners");

  // Should register users as bus owners or passengers to implement this hook.
  useEffect(() => {
    try {
      getBusOwnerData().then((data) => {
        setBusOwnerData(data);
      });
      getPassengerData().then((data) => {
        setPassengerData(data);
      });
      getAdminData().then((data) => {
        setAdminData(data);
      });
    } catch (error) {
      console.log("Error fetching user table data:", error);
    }
  }, []);

  const tabList = [
    {
      key: "BusOwners",
      tab: "Bus Owners",
    },
    {
      key: "Passengers",
      tab: "Passengers",
    },
    {
      key: "Admins",
      tab: "Admins",
    },
  ];

  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mobile number",
      dataIndex: "mobile_number",
      key: "mobile_number",
    },
    {
      title: "Date of Birth",
      dataIndex: "date_of_birth",
      key: "date_of_birth",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" size="small">
            Remove user
          </Button>
          <Button type="primary" size="small">
            Edit user
          </Button>
        </Space>
      ),
    },
  ];

  const contentList = {
    BusOwners: <Table columns={columns} dataSource={busOwnerData} />,
    Passengers: <Table columns={columns} dataSource={passengerData} />,
    Admins: <Table columns={columns} dataSource={adminData} />,
  };

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Manage users</h2>
      <Card
        style={{
          width: "100%",
        }}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
      >
        {contentList[activeTabKey1]}
      </Card>
      <br />
      <br />
    </>
  );
};

export default ManageUsers;
