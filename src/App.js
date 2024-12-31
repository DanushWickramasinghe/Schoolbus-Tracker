import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/commonPages/login";
import RegisterPage from "./pages/commonPages/register";
import HomePage from "./pages/commonPages/home";
import VehicleRegistrationForm from "./pages/userPages/busOwners/vehicleRegister";
import ViewPassengers from "./pages/userPages/busOwners/viewPassengers";
import ViewVehicles from "./pages/userPages/passengers/viewVehicles";
import ManageUsers from "./pages/adminPages/manageUsers";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
