import React, { useState, useEffect } from "react";
import { Space, Table, Button } from "antd";
import { viewVehicleDetails } from "../../../apis/passenger.api";

const ViewVehicles = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    viewVehicleDetails()
      .then((data) => {
        console.log("API Response", data);
        const formattedData = data.map((item, index) => ({
          ...item,
          key: index,
        }));
        setData(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching vehicle data:", error);
        setError("Failed to load vehicle data. Please try again later.");
      });
  }, []);

  const columns = [
    {
      title: "Vehicle ID",
      dataIndex: "vehicleid",
      key: "vehicleid",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Owner Name",
      dataIndex: "ownername",
      key: "ownername",
    },
    {
      title: "Vehicle Type",
      dataIndex: "vehicletype",
      key: "vehicletype",
    },
    {
      title: "Vehicle Number",
      dataIndex: "vehiclenumber",
      key: "vehiclenumber",
    },
    {
      title: "Starting Location",
      dataIndex: "startinglocation",
      key: "startinglocation",
    },
    {
      title: "End Location",
      dataIndex: "endlocation",
      key: "endlocation",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" size="small">
            Subscribe
          </Button>
          <Button type="primary" size="small">
            View details
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        Available Vehicles
      </h2>
      {error ? (
        <p style={{ textAlign: "center", color: "red" }}>{error}</p>
      ) : (
        <Table columns={columns} dataSource={data} />
      )}
    </div>
  );
};

export default ViewVehicles;
