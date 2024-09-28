import React from 'react';
import { Link } from 'react-router-dom';  // For linking to other routes

const Overview = () => {
  return (
    <section className=" py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-6 mb-4 mb-md-0 text-start  ">
            <h1 className="display-4">Welcome to SkillBoost Portal</h1>
            <p className="lead text-muted mb-4">
              Unlock your potential with our cutting-edge learning platform.
            </p>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="fas fa-check-circle text-success me-2"></i>
                Access to thousands of courses
              </li>
              <li className="mb-3">
                <i className="fas fa-check-circle text-success me-2"></i>
                Learn from industry experts
              </li>
              <li className="mb-3">
                <i className="fas fa-check-circle text-success me-2"></i>
                Personalized learning paths
              </li>
              <li className="mb-3">
                <i className="fas fa-check-circle text-success me-2"></i>
                Track your progress in real-time
              </li>
            </ul>
            <Link to="/courses" className="btn btn-primary btn-lg mt-3">
              Start Learning Now
            </Link>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <div className='m-3 p-3'> 
            <img
              src="/images/Online learning-rafiki.png?height=550&width=800"
              alt="Students learning online"
              className="img-fluid rounded shadow"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
