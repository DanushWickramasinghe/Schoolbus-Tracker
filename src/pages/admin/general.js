import { useEffect, useState } from "react";
import { getDashboardData } from "../../apis/admin.api";
import { Card, Col } from "antd";

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
