import axios from "axios";
import Host from "../configs/server";

// This API is defined to fetch the details of the vehicle that the passenger has registered.
export const viewVehicleDetails = async () => {
  try {
    const response = await axios.get(
      `${Host}/api/user/passenger/vehicle-details`
    );
    return response.data.registeredvehicles;
  } catch (error) {
    console.error("Error fetching owned buses:", error);
    return error;
  }
};

// This API is defined to fetch more details about the vehicle such as travelled cities, times at those cities etc.
export const viewMoreVehicleDetails = async (busID) => {
  try {
    const response = await axios.get(`/api/${busID}/more-details`);
    return response.data;
  } catch (error) {
    console.log(error)("Error fetching more details:", error);
    return error;
  }
};

// This API is defined to handle the subscribe action. This subscribe action should notify the busowner about this new passenger.
export const handleSubscribe = async (vehicleId, passengerId) => {
  try {
    const response = await axios.post("/api/subscribe", {
      vehicleId,
      passengerId,
    });
    return response.data;
  } catch (error) {
    console.log(error)("Error subscribing to vehicle:", error);
    return error;
  }
};
