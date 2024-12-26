/* Bus owners can view passengers registered for each of their vehicles here.*/
/* Functions related to removing current passengers, accepting new passengers */

import { useState, useEffect } from "react";
import axios from "axios";

const viewPassengers = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // Fetch data using API
    axios
      .get("/api/registered-vehicle-data")
      .then((response) => {
        setVehicles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching registered vehicle data:", error);
      });
  }, []);

  return (
    <div className="viewVehicles">
      <h1>Vehicle List</h1>
      {vehicles.length > 0 ? (
        <ul>
          {vehicles.map((vehicle) => (
            <li key={vehicle.id}>
              {vehicle.name} - {vehicle.type}
            </li>
          ))}
        </ul>
      ) : (
        <p>No vehicles found.</p>
      )}
    </div>
  );
};

export default viewPassengers;
