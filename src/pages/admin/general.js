import { useEffect, useState } from "react";
import { getDashboardData } from "../../apis/admin.api";

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
  });

  return (
    <div>
      <h1>User Count: {userCount}</h1>
    </div>
  );
};

export default General;
