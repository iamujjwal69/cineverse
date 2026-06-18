import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUser, FaBars, FaTimes, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(
    localStorage.getItem('selectedCity') || 'Chandigarh'
  );

  const handleCityChange = (e) => {
    const newCity = e.target.value;
    setSelectedCity(newCity);
    localStorage.setItem('selectedCity', newCity);
    window.dispatchEvent(new CustomEvent('cityChanged', { detail: newCity }));
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar glass">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
            <span className="logo-text">TicketShow</span>
          </Link>

          <div className="location-selector">
            <FaMapMarkerAlt className="location-icon" />
            <select 
              value={selectedCity} 
              onChange={handleCityChange} 
              className="location-select"
            >
              <option value="Chandigarh">Chandigarh</option>
              <option value="Delhi NCR">Delhi NCR</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bengaluru">Bengaluru</option>
            </select>
          </div>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/movies" onClick={() => setMenuOpen(false)}>Movies</Link>
          </li>
          
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
              </li>
              
              {user?.role === 'ADMIN' && (
                <li>
                  <Link to="/admin" onClick={() => setMenuOpen(false)}>Admin</Link>
                </li>
              )}
              
              {user?.role === 'THEATRE_OWNER' && (
                <li>
                  <Link to="/theatre-owner" onClick={() => setMenuOpen(false)}>Theatre</Link>
                </li>
              )}
              
              <li className="navbar-user">
                <Link to="/profile" onClick={() => setMenuOpen(false)}>
                  <FaUser /> {user?.name || user?.email}
                </Link>
              </li>
              
              <li>
                <button onClick={handleLogout} className="btn-logout">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
              </li>
              <li>
                <Link to="/signup" onClick={() => setMenuOpen(false)} className="btn-signup">
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
