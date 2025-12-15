import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/user/dashboard/`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  return (
    <div className="home-container">
      <div className="home-hero">
        <h1>Tala Éducation</h1>

        {user ? (
          <>
            <p className="welcome-text">
              Bienvenue <strong>{user.name}</strong> 👋
            </p>
            <p className="subtitle">
              Accédez à votre espace personnel et suivez votre progression.
            </p>
          </>
        ) : (
          <>
            <p className="welcome-text">
              Apprenez, progressez et réussissez avec Tala Éducation
            </p>
            <p className="subtitle">
              Connectez-vous pour accéder à votre espace personnel.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
