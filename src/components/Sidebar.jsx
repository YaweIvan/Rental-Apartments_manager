import React from "react";
import { Home, Users, CreditCard, MessageSquare, Calendar, UserCog, LogOut } from "lucide-react";

const menuItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Home, label: "Apartments" },
  { icon: Users, label: "Tenants" },
  { icon: CreditCard, label: "Rent Tracking" },
  { icon: MessageSquare, label: "Complaints" },
  { icon: Home, label: "Available Rooms" },
  { icon: Calendar, label: "Appointments" },
  { icon: UserCog, label: "Profile" },
  { icon: LogOut, label: "Logout" },
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
                <button className={`nav-item ${item.active ? 'active' : ''}`}>
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;