import React, { useState, useEffect } from "react";
import {
  getRegisteredVehicles,
  getVehiclePassengers,
} from "../../../apis/busOwner.api";
import { Space, Table } from "antd";
import { useNavigate } from "react-router-dom";

const ViewPassengers = () => {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      console.log("Fetching owned vehicles....");
      getRegisteredVehicles().then((data) => {
        setVehicles(data); // Set the response as the data source for the table
      });
    } catch (error) {
      console.error("Error fetching owned vehicles:", error);
    }
  }, []);

  // This should be implemented further.
  const getPassengers = async (busId) => {
    try {
      const passengers = await getVehiclePassengers(busId);
      console.log(passengers);
    } catch (error) {
      console.error("Error fetching passengers:", error);
    }
  };

  const handleEdit = (vehicle) => {
    console.log("Selected Vehicle Details:", vehicle); // Log to verify the selected data
    navigate("/registervehicle", { state: { vehicle } }); // Pass data to the next page
  };

  // Should be replaced with actual data from the API
  const expandDataSource = Array.from({
    length: 3,
  }).map((_, i) => ({
    key: i.toString(),
    date: "2014-12-24 23:12:00",
    name: "This is production name",
    upgradeNum: "Upgraded: 56",
  }));

  const expandColumns = [
    {
      title: "Passenger ID",
      dataIndex: "passengerID",
      key: "passengerID",
    },
    {
      title: "Passenger Name",
      dataIndex: "passengerName",
      key: "passengername",
    },
    {
      title: "Registration Date",
      dataIndex: "registrationDate",
      key: "registrationDate",
    },
    {
      title: "Pickup location",
      dataIndex: "pickup",
      key: "pickup",
    },
    {
      title: "Destination",
      dataIndex: "destination",
      key: "destination",
    },
    {
      title: "Action",
      key: "operation",
      render: () => (
        <Space size="middle">
          <a>Edit details</a>
          <a>Remove passenger</a>
        </Space>
      ),
    },
  ];

  const columns = [
    {
      title: "Owner Name",
      dataIndex: "owner_name",
      key: "owner_name",
    },
    {
      title: "Owner NIC",
      dataIndex: "owner_NIC_number",
      key: "owner_NIC_number",
    },
    {
      title: "Vehicle Type",
      dataIndex: "vehicle_type",
      key: "vehicle_type",
    },
    {
      title: "Vehicle Model",
      dataIndex: "vehicle_model",
      key: "vehicle_model",
    },
    {
      title: "Vehicle Number",
      dataIndex: "vehicle_number",
      key: "vehicle_number",
    },
    {
      title: "Starting Location",
      dataIndex: "starting_location",
      key: "starting_location",
    },
    {
      title: "End Location",
      dataIndex: "end_location",
      key: "end_location",
    },
    {
      title: "Covered Cities",
      dataIndex: "covered_cities",
      key: "covered_cities",
    },
    {
      title: "Action",
      key: "operation",
      render: (_, vehicle) => (
        <Space size="middle">
          <a onClick={() => handleEdit(vehicle)}>Edit details</a>
          <a>Remove vehicle</a>
        </Space>
      ),
    },
  ];

  const expandedRowRender = () => (
    <Table
      columns={expandColumns}
      dataSource={expandDataSource}
      pagination={false}
    />
  );

  return (
    <div className="viewVehicles">
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: [],
        }}
        dataSource={vehicles} // Set the data source to the state holding fetched vehicles
      />
    </div>
  );
};

export default ViewPassengers;
