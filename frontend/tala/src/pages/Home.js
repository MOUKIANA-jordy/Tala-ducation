import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import educationVideo from "../assets/video/education.mp4";

function Home() {
  return (
    <div className="home">
      {/* Vidéo */}
      <video
        className="home-video"
        src="education.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="home-overlay"></div>

      {/* Contenu */}
      <div className="home-content">
        <h1>Tala Éducation</h1>
        <p>
          Une plateforme moderne pour accompagner les étudiants,
          enseignants et établissements scolaires.
        </p>

        <div className="home-buttons">
          <Link to="/login" className="btn btn-primary">
            Se connecter
          </Link>
          <Link to="/register" className="btn btn-secondary">
            Créer un compte
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
