// src/components/Header.tsx
import { Link } from 'react-router-dom';
import './Header.css';
import icon from '../assets/icons.png';

const Header = () => {
  return (
    <header className="header">
  <div className="div-make">
    <div className="left">
      
      <p><img src={icon} alt="logo" className="logo-icon" />TurVinn</p>
    </div>
    <div className="center">
      <nav>
        <ul>
          <li><Link to="/">Головна</Link></li>
          <li><Link to="/history">Історія</Link></li>
          <li><Link to="/excursions">Екскурсії</Link></li>
          <li><Link to="/profile">Застосунок</Link></li>
        </ul>
      </nav>
    </div>
  </div>
</header>

  );
};

export default Header;
