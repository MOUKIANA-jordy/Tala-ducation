import React, { useEffect, useState } from "react";
import axios from "axios";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/users/`, {
        headers: token ? { Authorization: `Token ${token}` } : {},
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch(() => {
        setError("Impossible de récupérer la liste des utilisateurs.");
      });
  }, []);

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="users-list-page">
      <h2>Liste des utilisateurs</h2>

      {users.length === 0 ? (
        <p>Aucun utilisateur trouvé.</p>
      ) : (
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom d'utilisateur</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UsersList;
