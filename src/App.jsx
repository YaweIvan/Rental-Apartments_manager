import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Apartments from "./pages/Apartments";
import Tenants from "./pages/Tenants";
import Rent from "./pages/Rent";
import Complaints from "./pages/Complaints";
import AvailableRooms from "./pages/AvailableRooms";
import Appointments from "./pages/Appointments";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/apartments" element={<Apartments />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/rooms-available" element={<AvailableRooms />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
