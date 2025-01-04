/* Admin access to manage any user, who uses the application */

import React, { useState } from "react";
import { Card, Space, Table, Button } from "antd";

const ManageUsers = () => {
  const tabList = [
    {
      key: "BusOwners",
      tab: "Bus Owners",
    },
    {
      key: "Passengers",
      tab: "Passengers",
    },
  ];

  const columnsBusOwners = [
    {
      title: "Registration ID",
      dataIndex: "registrationid",
      key: "registrationid",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Full Name",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "NIC number",
      dataIndex: "nicnumber",
      key: "nicnumber",
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

  const columnsPassengers = [
    {
      title: "Registration ID",
      dataIndex: "registrationid",
      key: "registrationid",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Full Name",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "NIC number",
      dataIndex: "nicnumber",
      key: "nicnumber",
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

  const dataBusOwners = [
    {
      key: "1",
      registrationid: "REG12345",
      fullname: "John Brown",
      nicnumber: "123456789V",
    },
    {
      key: "2",
      registrationid: "REG67890",
      fullname: "Jane Smith",
      nicnumber: "987654321V",
    },
    {
      key: "3",
      registrationid: "REG11223",
      fullname: "Sam Wilson",
      nicnumber: "456789123V",
    },
  ];

  const dataPassengers = [
    {
      key: "1",
      registrationid: "REG98765",
      fullname: "Alice Johnson",
      nicnumber: "234567890V",
    },
    {
      key: "2",
      registrationid: "REG54321",
      fullname: "Bob Williams",
      nicnumber: "876543210V",
    },
    {
      key: "3",
      registrationid: "REG67891",
      fullname: "Charlie Brown",
      nicnumber: "567890123V",
    },
  ];

  const contentList = {
    BusOwners: <Table columns={columnsBusOwners} dataSource={dataBusOwners} />,
    Passengers: (
      <Table columns={columnsPassengers} dataSource={dataPassengers} />
    ),
  };

  const [activeTabKey1, setActiveTabKey1] = useState("BusOwners");
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