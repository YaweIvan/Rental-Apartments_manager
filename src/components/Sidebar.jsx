import React from "react";
import { Link } from "react-router-dom";
import { Home, Users, CreditCard, MessageSquare, Calendar, UserCog, LogOut } from "lucide-react";

const menuItems = [
  { icon: Home, label: "Dashboard", to: "/dashboard" },
  { icon: Home, label: "Apartments", to: "/apartments" },
  { icon: Users, label: "Tenants", to: "/tenants" },
  { icon: CreditCard, label: "Rent Tracking", to: "/rent" },
  { icon: MessageSquare, label: "Complaints", to: "/complaints" },
  { icon: Home, label: "Available Rooms", to: "/rooms-available" },
  { icon: Calendar, label: "Appointments", to: "/appointments" },
  { icon: UserCog, label: "Profile", to: "/profile" },
  { icon: LogOut, label: "Logout", to: "/" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">
            <Home size={18} />
          </div>
          <h2 className="logo-text">Rental Manager</h2>
        </div>
      </div>
      <nav className="nav-menu">
        <ul className="nav-list">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index}>
                <Link
                  to={item.to}
                  className="nav-item"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;