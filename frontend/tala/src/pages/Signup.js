import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [subscription, setSubscription] = useState('basic');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');

    const userData = { username, email, password, subscription };

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/register/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        navigate('/login');
      } else {
        const data = await response.json();
        setError(data.message || "Erreur lors de l'inscription.");
      }
    } catch {
      setError("Erreur serveur. Réessayez plus tard.");
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Inscription</h2>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSignUp}>
        <label>Nom d'utilisateur</label>
        <input 
          type="text" 
          value={username} 
          onChange={e => setUsername(e.target.value)} 
          required 
        />

        <label>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          required 
        />

        <label>Mot de passe</label>
        <input 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          required 
        />

        <label>Type d'abonnement</label>
        <select 
          value={subscription}
          onChange={e => setSubscription(e.target.value)}
        >
          <option value="basic">Basic</option>
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
        </select>

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default SignUpPage;
