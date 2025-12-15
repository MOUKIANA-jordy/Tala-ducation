import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/password-reset/`,
        { email }
      );

      setSuccess(
        "Un lien de réinitialisation a été envoyé à votre adresse email."
      );
      setEmail("");
    } catch (err) {
      setError(
        err.response?.data?.detail ||
        "Impossible d'envoyer l'email. Vérifiez l'adresse."
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Mot de passe oublié</h2>
        <p className="auth-subtitle">
          Entrez votre email pour recevoir un lien de réinitialisation
        </p>

        {error && <p className="auth-error">{error}</p>}
        {success && <p className="auth-success">{success}</p>}

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemple@email.com"
            required
          />

          <button type="submit">Envoyer le lien</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
