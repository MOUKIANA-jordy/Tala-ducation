import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../styles/Auth.css";

const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/login/`,
        formData
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setIsLoggedIn(true);
        setSuccess(`Bienvenue ${formData.username} 👋`);

        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } else {
        setError("Erreur d'authentification.");
      }
    } catch (err) {
      setError(
        err.response?.data?.detail ||
        "Nom d'utilisateur ou mot de passe incorrect."
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Connexion</h2>
        <p className="auth-subtitle">
          Accédez à votre espace Tala Éducation
        </p>

        {error && <p className="auth-error">{error}</p>}
        {success && <p className="auth-success">{success}</p>}

        <form onSubmit={handleSubmit}>
          <label>Nom d'utilisateur</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Entrez votre nom d'utilisateur"
            required
          />

          <label>Mot de passe</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Entrez votre mot de passe"
            required
          />

          <div className="auth-links">
            <Link to="/forgot-password">Mot de passe oublié ?</Link>
          </div>

          <button type="submit">Se connecter</button>
        </form>

        <div className="auth-footer">
          <p>
            Pas encore de compte ?{" "}
            <Link to="/signup">Créer un compte</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
