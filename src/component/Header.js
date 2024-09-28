// src/component/Header.js
import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ServicesDropdown from './ServicesDropdown'; // Import the dropdown

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white shadow-sm">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          {/* Logo */}
          <div className="d-flex align-items-center">
            <Link to="/" className="d-flex align-items-center">
              <img
                className="h-8 w-auto"
                src="/images/Seminar-rafiki.png"
                alt="Platform Logo"
                style={{ height: '40px', width: '40px' }}
              />
              <span className="ml-2 h5 mb-0 text-white">JoB PoRt</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="d-md-none">
            <button
              type="button"
              className="btn btn-light"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop menu */}
          <nav className="d-none d-md-flex">
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about-us">About</Link>
              </li>

              {/* Services Dropdown */}
              <ServicesDropdown /> {/* Inserted the ServicesDropdown component */}
            </ul>
          </nav>

          {/* Search bar */}
          <div className="d-flex align-items-center">
            <div className="input-group ">
              <input
                type="text"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <span className="input-group-text bg-light ms-3 mt-1">
                  <FaSearch className="text-muted" />
                </span>
              </div>
            </div>
          </div>

          {/* Login / Sign up */}
          <div className="d-none d-md-flex align-items-center">
            <Link to="/login" className="btn btn-outline-light me-md-3">Login</Link>
            <Link to="/signup" className="btn btn-light ml-3">Sign Up</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="d-md-none bg-white shadow-sm mt-3">
            <nav className="nav flex-column p-3">
              <Link className="nav-link text-dark" to="/">Home</Link>
              <Link className="nav-link text-dark" to="/about-us">About</Link>
              <Link className="nav-link text-dark" to="/services">Services</Link>
              <Link to="/signup" className="btn btn-primary mt-3">Sign Up</Link>
              <Link to="/login" className="btn btn-link text-dark mt-2">Login</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
