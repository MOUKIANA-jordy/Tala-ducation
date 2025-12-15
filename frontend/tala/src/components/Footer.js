import React from "react";
import "../styles/Footer.css"; // fichier CSS séparé pour le style

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo ou Nom */}
        <div className="footer-brand">
          <h2>Tala Éducation</h2>
          <p>Apprentissage et suivi scolaire simplifiés</p>
        </div>

        {/* Liens rapides */}
        <div className="footer-links">
          <h3>Liens rapides</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/login">Connexion</a></li>
            <li><a href="/register">Inscription</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: jordymoukiana@gmail.com</p>
          <p>Téléphone: +33 7 45 19 01 74</p>
          <p>Adresse: 10 Rue wenceslas, Paris, France</p>
        </div>

        {/* Réseaux sociaux */}
        <div className="footer-social">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 Tala Éducation. Tous droits réservés.
      </div>
    </footer>
  );
}
