import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/users/`, {
        headers: token ? { Authorization: `Token ${token}` } : {},
      })
      .then((res) => {
        setUsers(res.data);
      })
      .catch(() => {
        setError("Impossible de récupérer la liste des utilisateurs.");
      });
  }, []);

  if (error) return <p className="error-message">{error}</p>;
  if (users.length === 0) return <p>Aucun utilisateur trouvé.</p>;

  return (
    <div className="users-page">
      <h2>Liste des utilisateurs</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom d'utilisateur</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.username}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
