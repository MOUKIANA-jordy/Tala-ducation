import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/user/dashboard/`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Chargement...</div>;

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <Header user={user} />

        <div className="dashboard-content">
          <h2>Tableau de bord</h2>

          <div className="stats-grid">
            <div className="stat-card">
              <h3>Profil</h3>
              <p>{user?.name}</p>
            </div>

            <div className="stat-card">
              <h3>Email</h3>
              <p>{user?.email}</p>
            </div>

            <div className="stat-card">
              <h3>Rôle</h3>
              <p>{user?.role || "Utilisateur"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
