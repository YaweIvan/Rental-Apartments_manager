import React from "react";
import { Menu, Sun, Bell, Search, User } from "lucide-react";

function Topbar() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <button className="menu-btn" disabled>
            <Menu size={24} />
          </button>
          <h1 className="header-title">Admin Dashboard</h1>
        </div>
        <div className="header-right">
          <div className="search-container">
            <Search className="search-icon" size={16} />
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              disabled
            />
          </div>
          <button className="action-btn" disabled>
            <Sun size={18} />
          </button>
          <button className="action-btn" disabled>
            <Bell size={18} />
          </button>
          <div className="user-section">
            <div className="user-avatar">
              <User size={16} />
            </div>
            <span className="user-name">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;