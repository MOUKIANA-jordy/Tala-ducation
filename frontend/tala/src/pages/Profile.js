import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/user/profile/`, {
        headers: token ? { Authorization: `Token ${token}` } : {},
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
        setError("Impossible de récupérer vos informations.");
      });
  }, []);

  if (error) return <p className="error-message">{error}</p>;
  if (!user) return <p>Chargement...</p>;

  return (
    <div className="profile-page">
      <h2>Mon Profil</h2>

      <p><strong>ID :</strong> {user.id}</p>
      <p><strong>Nom d'utilisateur :</strong> {user.username}</p>
      <p><strong>Email :</strong> {user.email}</p>

      <button className="edit-btn">Modifier le profil</button>
    </div>
  );
}

export default Profile;
