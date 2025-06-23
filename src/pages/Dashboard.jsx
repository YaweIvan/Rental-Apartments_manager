import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import {
  Building2, Home, Users, DollarSign, AlertTriangle, Calendar, UserCheck
} from "lucide-react";
import "./Dashboard.css";

// Static example complaints
const complaints = [
  {
    room: "A1",
    tenant: "John Doe",
    issue: "Water leakage in bathroom",
    status: "New",
    date: "2025-06-21",
  },
  {
    room: "B2",
    tenant: "Jane Smith",
    issue: "No electricity in kitchen",
    status: "In Progress",
    date: "2025-06-20",
  },
  {
    room: "A3",
    tenant: "Ali Kamya",
    issue: "Broken window",
    status: "Resolved",
    date: "2025-06-18",
  },
  {
    room: "B1",
    tenant: "Sarah Nakato",
    issue: "Toilet not flushing",
    status: "Resolved",
    date: "2025-06-17",
  },
];

const statsCards = [
  { title: "Total Apartments", value: "20", color: "#3b82f6", icon: Building2 },
  { title: "Occupied Rooms", value: "15", color: "#10b981", icon: Home },
  { title: "Available Rooms", value: "5", color: "#f59e0b", icon: Home },
  { title: "Tenants", value: "15", color: "#8b5cf6", icon: Users },
  { title: "Unpaid Rent", value: "UGX 1,200,000", color: "#ef4444", icon: DollarSign },
  { title: "Complaints", value: "4 Open", color: "#f97316", icon: AlertTriangle },
  { title: "Appointments", value: "2 Scheduled", color: "#06b6d4", icon: Calendar },
  { title: "Admins", value: "3 Active", color: "#6366f1", icon: UserCheck },
];

const recentComplaints = complaints.filter(c => c.status !== "Resolved").slice(0, 3);
const resolvedComplaints = complaints.filter(c => c.status === "Resolved");

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-layout">
        <Sidebar />
        <div className="main-content">
          <Topbar />
          <main className="content-area">
            {/* Stats Grid */}
            <div className="stats-grid">
              {statsCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div key={index} className="stat-card">
                    <div className="stat-card-content">
                      <div className="stat-icon" style={{ backgroundColor: card.color }}>
                        <Icon color="#fff" size={36} />
                      </div>
                      <div className="stat-info">
                        <h3>{card.title}</h3>
                        <p>{card.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Complaints Section */}
            <div className="complaints-grid">
              {/* Latest Complaints */}
              <div className="complaints-card">
                <div className="complaints-header">
                  <div className="status-dot new"></div>
                  <h2 className="complaints-title">Latest Complaints</h2>
                </div>
                <div className="complaints-list">
                  {recentComplaints.map((complaint, index) => (
                    <div key={index} className="complaint-item">
                      <div className="complaint-header">
                        <div className="complaint-meta">
                          <span className="room-badge">{complaint.room}</span>
                          <span className="tenant-name">{complaint.tenant}</span>
                        </div>
                        <span className={`status-badge ${complaint.status.toLowerCase().replace(' ', '-')}`}>
                          {complaint.status}
                        </span>
                      </div>
                      <p className="complaint-issue">{complaint.issue}</p>
                      <p className="complaint-date">{complaint.date}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resolved Issues */}
              <div className="complaints-card">
                <div className="complaints-header">
                  <div className="status-dot resolved"></div>
                  <h2 className="complaints-title">Resolved Issues</h2>
                </div>
                <div className="complaints-list">
                  {resolvedComplaints.map((complaint, index) => (
                    <div key={index} className="complaint-item">
                      <div className="complaint-header">
                        <div className="complaint-meta">
                          <span className="room-badge">{complaint.room}</span>
                          <span className="tenant-name">{complaint.tenant}</span>
                        </div>
                        <span className="status-badge resolved">
                          {complaint.status}
                        </span>
                      </div>
                      <p className="complaint-issue">{complaint.issue}</p>
                      <p className="complaint-date">{complaint.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;