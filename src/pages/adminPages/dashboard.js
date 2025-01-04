import React, { useEffect, useState } from "react";
import { getDashboardData } from "../../apis/admin.api";

/* Shows current status of the application, number of users, active users, past users etc. */
const Dashboard = () => {
  const [data, setData] = useState({
    totalUsers: 0,
    activeUsers: 0,
    pastUsers: 0,
    busesOnRoute: 0,
  });

  useEffect(() => {
    try {
      getDashboardData().then((data) => {
        setData(data);
      });
    } catch (error) {
      console.error("Error fetching Dashboard data:", error);
    }
  }, [setData]);
  

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-stats">
        <div className="stat">
          <h2>Total Users</h2>
          <p>{data.totalUsers}</p>
        </div>
        <div className="stat">
          <h2>Active Users</h2>
          <p>{data.activeUsers}</p>
        </div>
        <div className="stat">
          <h2>Past Users</h2>
          <p>{data.pastUsers}</p>
        </div>
        <div className="stat">
          <h2>Buses On Route</h2>
          <p>{data.busesOnRoute}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
