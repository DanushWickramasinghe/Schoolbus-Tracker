import { useEffect, useState } from "react";
import { getDashboardData } from "../../apis/admin.api";
import { Card, Col } from "antd";

// Here this component should be implemented further, to display a Map with the location of the buses.
// Admin should be able to see the locations of all the registered buses on the map.
// Each passenger should be able to see the location of the bus they are traveling in.

const General = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    try {
      getDashboardData().then((data) => {
        setUserCount(data);
      });
    } catch (error) {
      console.log("Error fetching user count:", error);
    }
  }, []);

  return (
    <div>
      <Col span={8}>
        <Card title="Application Usage Summary" bordered={false}>
          <p>Number of users registered: {userCount.totalUsers}</p>
          <p>Number of registered vehicles: {userCount.totalVehicles}</p>
          <p>Number of Bus Owners: {userCount.totalBusOwners}</p>
          <p>Number of Passengers: {userCount.totalPassengers}</p>
        </Card>
      </Col>
    </div>
  );
};

export default General;
