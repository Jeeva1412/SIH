import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faClock, faGraduationCap, faChartLine } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

const performanceData = [
  { id: 1, course: "Web Development Fundamentals", progress: 100, score: 92, timeSpent: 40 },
  { id: 2, course: "JavaScript Essentials", progress: 75, score: 88, timeSpent: 30 },
  { id: 3, course: "React Basics", progress: 60, score: 85, timeSpent: 25 },
  { id: 4, course: "Node.js and Express", progress: 40, score: 78, timeSpent: 15 },
  { id: 5, course: "Database Design with MongoDB", progress: 20, score: 90, timeSpent: 8 },
];

const skillsData = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Node.js", level: 60 },
  { name: "MongoDB", level: 50 },
];

const PerformanceAnalysis = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('month');

  const averageScore = performanceData.reduce((sum, course) => sum + course.score, 0) / performanceData.length;
  const totalTimeSpent = performanceData.reduce((sum, course) => sum + course.timeSpent, 0);
  const completedCourses = performanceData.filter(course => course.progress === 100).length;

  return (
    <>
      <Header />

      <div className="container py-4">
        <h1 className="text-center mb-5 fw-bold">Your Performance Analysis</h1>

        <div className="d-flex justify-content-end mb-4">
          <select
            value={selectedTimeFrame}
            onChange={(e) => setSelectedTimeFrame(e.target.value)}
            className="form-select w-25"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>

        <div className="row text-center">
          <div className="col-md-3">
            <div className="card p-3 h-100 mb-4">
              <FontAwesomeIcon icon={faChartBar} size="2x" className="text-secondary mb-2" />
              <h5 className="fw-bold">Average Score</h5>
              <p className="display-6 text-sm">{averageScore.toFixed(1)}%</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 h-100 mb-4">
              <FontAwesomeIcon icon={faClock} size="2x" className="text-secondary mb-2" />
              <h5 className="fw-bold">Total Time Spent</h5>
              <p className="display-6 text-sm">{totalTimeSpent} hours</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 h-100 mb-4">
              <FontAwesomeIcon icon={faGraduationCap} size="2x" className="text-secondary mb-2" />
              <h5 className="fw-bold">Completed Courses</h5>
              <p className="display-6 text-sm">{completedCourses}</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 h-100 mb-4">
              <FontAwesomeIcon icon={faChartLine} size="2x" className="text-secondary mb-2" />
              <h5 className="fw-bold">Overall Progress</h5>
              <p className="display-6 text-sm">
                {(performanceData.reduce((sum, course) => sum + course.progress, 0) / performanceData.length).toFixed(1)}%
              </p>
            </div>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header">
            <h2 className="fw-bold">Course Performance</h2>
          </div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Progress</th>
                  <th>Score</th>
                  <th>Time Spent</th>
                </tr>
              </thead>
              <tbody>
                {performanceData.map((course) => (
                  <tr key={course.id}>
                    <td>{course.course}</td>
                    <td>
                      <div className="progress" style={{ height: '8px' }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: `${course.progress}%` }}
                          aria-valuenow={course.progress}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </td>
                    <td>{course.score}%</td>
                    <td>{course.timeSpent} hours</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="fw-bold">Skills Assessment</h2>
          </div>
          <div className="card-body">
            {skillsData.map((skill) => (
              <div key={skill.name} className="mb-3">
                <h6 className="fw-bold">{skill.name}</h6>
                <div className="progress" style={{ height: '8px' }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PerformanceAnalysis;
