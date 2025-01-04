import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/common/login";
import RegisterPage from "./pages/common/register";
import HomePage from "./pages/common/home";
import VehicleRegistrationForm from "./pages/user/busOwners/vehicleRegister";
import ViewPassengers from "./pages/user/busOwners/viewPassengers";
import ViewVehicles from "./pages/user/passengers/viewVehicles";
import ManageUsers from "./pages/admin/manageUsers";
import Dashboard from "./pages/common/dashboard";
import PassengerProfile from "./pages/user/passengers/viewPassengerProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/registervehicle"
            element={<VehicleRegistrationForm />}
          />
          <Route path="/viewpassengers" element={<ViewPassengers />} />
          <Route path="/viewvehicles" element={<ViewVehicles />} />
          <Route path="/manageusers" element={<ManageUsers />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/passengerprofile" element={<PassengerProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
