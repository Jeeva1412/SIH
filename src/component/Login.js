import React, { useState, useEffect } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/Login.module.css'; 
import { Link } from 'react-router-dom';
import Header from './Header';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Scroll to login section on component load
  useEffect(() => {
    const loginElement = document.getElementById('login-form');
    if (loginElement) {
      window.scrollTo({
        top: loginElement.offsetTop,
        behavior: 'smooth', // Optional: for smooth scrolling
      });
    }
  }, []); // Empty dependency array ensures it runs only once after the component mounts

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      {/* Fixed header */}
      <Header />

      {/* Login form with a scroll target */}
      <div className="container-md d-flex justify-content-center align-items-center vh-100">
        <div id="login-form" className="card shadow p-4 w-50 bg-white rounded-3">
          <h2 className="text-center mb-4 py-4">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="email">Email address</label>
              </div>
            </div>
            <div className="mb-4">
              <div className="form-floating position-relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="password">Password</label>

                {/* Toggle password visibility */}
                <button
                  type="button"
                  className="btn btn-link position-absolute top-50 end-0 translate-middle-y"
                  style={{ textDecoration: 'none' }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <i className="fa-solid fa-eye h-5 w-5 text-gray-600"></i>
                  ) : (
                    <i className="fa-solid fa-eye-slash h-5 w-5 text-gray-600"></i>
                  )}
                </button>
              </div>
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary btn-lg w-100">
                Sign In
              </button>
            </div>
          </form>
          <p className="my-4">
            Don't Have an account? <Link to={'/signup'}>Signup</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
