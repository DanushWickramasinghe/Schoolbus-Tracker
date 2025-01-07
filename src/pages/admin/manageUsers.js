/* Admin access to manage any user, who uses the application */

import React, { useState, useEffect } from "react";
import { Card, Space, Table, Button } from "antd";
import { getBusOwnerData, getPassengerData } from "../../apis/admin.api";

const ManageUsers = () => {
  // const [busOwnerData, setBusOwnerData] = useState([]);
  // const [passengerData, setPassengerData] = useState([]);
  const [activeTabKey1, setActiveTabKey1] = useState("BusOwners");

  // Should register users as bus owners or passengers to implement this hook.
  // useEffect(() => {
  //   try {
  //     getBusOwnerData().then((data) => {
  //       console.log("API Response for bus owner data:", data);
  //       const formattedData = data.map((item, index) => ({
  //         ...item,
  //         key: index,
  //       }));
  //       setBusOwnerData(formattedData);
  //     });
  //   } catch (error) {
  //     console.log("Error fetching bus owner data:", error);
  //   }
  // }, [activeTabKey1]);

  // // Should register users as bus owners or passengers to implement this hook.
  // useEffect(() => {
  //   try {
  //     getPassengerData().then((data) => {
  //       console.log("API Response for passenger data:", data);
  //       const formattedData = data.map((item, index) => ({
  //         ...item,
  //         key: index,
  //       }));
  //       setPassengerData(formattedData);
  //     });
  //   } catch (error) {
  //     console.log("Error fetching passenger data:", error);
  //   }
  // }, [activeTabKey1]);

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

  const busOwnerData = [
    {
      key: "1",
      registrationid: "BO123456",
      fullname: "John Doe",
      nicnumber: "123456789V",
    },
    {
      key: "2",
      registrationid: "BO654321",
      fullname: "Jane Smith",
      nicnumber: "987654321V",
    },
    {
      key: "3",
      registrationid: "BO112233",
      fullname: "Mark Johnson",
      nicnumber: "112233445V",
    },
  ];

  const passengerData = [
    {
      key: "1",
      registrationid: "P123456",
      fullname: "Alice Brown",
      nicnumber: "123456789V",
    },
    {
      key: "2",
      registrationid: "P654321",
      fullname: "Bob White",
      nicnumber: "987654321V",
    },
    {
      key: "3",
      registrationid: "P112233",
      fullname: "Charlie Green",
      nicnumber: "112233445V",
    },
  ];

  const contentList = {
    BusOwners: <Table columns={columnsBusOwners} dataSource={busOwnerData} />,
    Passengers: (
      <Table columns={columnsPassengers} dataSource={passengerData} />
    ),
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
