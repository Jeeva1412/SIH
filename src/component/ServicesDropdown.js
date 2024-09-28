// src/component/ServicesDropdown.js
import React from 'react';
import { Link } from 'react-router-dom';

function ServicesDropdown() {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle text-white"
        href="#"
        id="servicesDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Services
      </a>
      <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
        <li><Link className="dropdown-item" to="/skill-gap-analysis">Skill Gap analysis</Link></li>
        <li><Link className="dropdown-item" to="/adaptive-learning">Adaptive Learning Pathways</Link></li>
        <li><Link className="dropdown-item" to="/job-market">real time job market insight</Link></li>
        <li><Link className="dropdown-item" to="/resume-wizard">Resume Wizard</Link></li>
        <li><Link className="dropdown-item" to="/performace-analysis">Performance Monitor</Link></li>
        <li><Link className="dropdown-item" to="/community-support">Community Support</Link></li>
      </ul>
    </li>
  );
}

export default ServicesDropdown;
