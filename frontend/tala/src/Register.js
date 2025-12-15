import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/register/`,
        formData
      );

      toast.success('Inscription réussie ! Vous pouvez vous connecter.');

      // Optionnel : redirection après 2 secondes
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);

    } catch (error) {
      if (error.response?.data) {
        toast.error(
          error.response.data.username?.[0] ||
          error.response.data.email?.[0] ||
          error.response.data.password?.[0] ||
          'Erreur lors de l’inscription'
        );
      } else {
        toast.error('Erreur serveur');
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="register-container">
        <h2>Inscription</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Nom d'utilisateur"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </>
  );
};

export default Register;
