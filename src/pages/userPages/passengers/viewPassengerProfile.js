import React from "react";
import {
  Avatar,
  Breadcrumb,
  Button,
  Card,
  Col,
  Descriptions,
  Layout,
  Row,
  Table,
  Tabs,
} from "antd";

const { Content } = Layout;
const { TabPane } = Tabs;

const PassengerProfile = () => {
  // Dummy data
  const passengerData = {
    name: "John Doe",
    email: "john.doe@example.com",
    contact: "+94 77 123 4567",
    profilePicture: "https://via.placeholder.com/150",
    address: "123 Main St, Colombo, Sri Lanka",
  };

  const tripHistory = [
    {
      key: "1",
      date: "2024-12-01",
      origin: "Colombo",
      destination: "Kandy",
      status: "Completed",
    },
    {
      key: "2",
      date: "2024-12-02",
      origin: "Kandy",
      destination: "Nuwara Eliya",
      status: "Cancelled",
    },
  ];

  const tripColumns = [
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Origin", dataIndex: "origin", key: "origin" },
    { title: "Destination", dataIndex: "destination", key: "destination" },
    { title: "Status", dataIndex: "status", key: "status" },
  ];

  return (
    <Layout>
      <Content style={{ margin: "16px", padding: "24px", background: "#fff" }}>
        {/* Breadcrumb */}
        <Breadcrumb style={{ marginBottom: "16px" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Passengers</Breadcrumb.Item>
          <Breadcrumb.Item>Profile</Breadcrumb.Item>
        </Breadcrumb>

        {/* Header */}
        <Row
          align="middle"
          justify="space-between"
          style={{ marginBottom: "16px" }}
        >
          <Col>
            <h2>{passengerData.name}'s Profile</h2>
          </Col>
          <Col>
            <Button type="primary" style={{ marginRight: "8px" }}>
              Edit Profile
            </Button>
            <Button type="danger">Delete Profile</Button>
          </Col>
        </Row>

        {/* Profile Details */}
        <Card style={{ marginBottom: "16px" }}>
          <Row gutter={16}>
            <Col span={6}>
              <Avatar
                size={128}
                src={passengerData.profilePicture}
                alt="Profile Picture"
                style={{ marginBottom: "16px" }}
              />
            </Col>
            <Col span={18}>
              <Descriptions title="Basic Information" bordered>
                <Descriptions.Item label="Name">
                  {passengerData.name}
                </Descriptions.Item>
                <Descriptions.Item label="Email">
                  {passengerData.email}
                </Descriptions.Item>
                <Descriptions.Item label="Contact">
                  {passengerData.contact}
                </Descriptions.Item>
                <Descriptions.Item label="Address" span={2}>
                  {passengerData.address}
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
        </Card>

        {/* Trip History */}
        <Card>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Trip History" key="1">
              <Table
                dataSource={tripHistory}
                columns={tripColumns}
                pagination={{ pageSize: 5 }}
              />
            </TabPane>
            <TabPane tab="Activity Logs" key="2">
              <p>Activity Logs will be displayed here...</p>
            </TabPane>
          </Tabs>
        </Card>
      </Content>
    </Layout>
  );
};

export default PassengerProfile;
