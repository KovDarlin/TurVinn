// src/components/Footer.tsx
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#" title="Facebook">
            <img src="/icons/facebook.png" alt="Facebook" />
          </a>
          <a href="#" title="Instagram">
            <img src="/icons/instagram.png" alt="Instagram" />
          </a>
          <a href="#" title="Telegram">
            <img src="/icons/viber.png" alt="Viber" />
          </a>
        
      </div>

      <div className="footer-links">
          <Link to="/">Головна</Link>
          <Link to="/history">Історія</Link>
          <Link to="/excursions">Екскурсії</Link>
          <Link to="/profile">Кабінет</Link>
      </div>

      <p className="footer-copy">TurVinn © 2025 Kovalenko Daryna</p>
    </footer>
  );
};


export default Footer;
