import axios from "axios";
import Host from "../configs/server";

export const getRegisteredVehicles = async () => {
  try {
    const response = await axios.get(`${Host}/api/user/registered-vehicles`);
    console.log(response.data.registeredvehicles);
    return response.data.registeredvehicles;
  } catch (error) {
    console.error("Error fetching owned buses:", error);
    return error;
  }
};

export const registerVehicle = async (busData) => {
  try {
    const response = await axios.post(
      `${Host}/api/user/bus-owner/register-bus`,
      busData
    );
    return response.data;
  } catch (error) {
    console.error("Error registering bus:", error);
    return error;
  }
};

export const updateBus = async (busData) => {
  try {
    const response = await axios.put("/api/bus-owner/update-bus", busData);
    return response.data;
  } catch (error) {
    console.error("Error updating bus:", error);
    return error;
  }
};

// To be implemented further.
export const getVehiclePassengers = async (busId) => {
  try {
    const response = await axios.get(`/api/bus-owner/${busId}/passengers`);
    return response.data;
  } catch (error) {
    console.error("Error fetching passengers:", error);
    return error;
  }
};

export const removePassenger = async (passengerId, busId) => {
  try {
    const response = await axios.delete(
      `/api/bus-owner/remove-passenger/${passengerId}/${busId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error removing passenger:", error);
    return error;
  }
};

export const updatePassenger = async (passengerData, busId) => {
  try {
    const response = await axios.put(
      `/api/bus-owner/update-passenger/${busId}`,
      passengerData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating passenger:", error);
    return error;
  }
};
