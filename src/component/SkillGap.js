import React, { useState } from 'react';
import { ChartBarIcon, LightBulbIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import Header from './Header';

const initialSkills = [
  { name: 'JavaScript', current: 0, desired: 0 },
  { name: 'React', current: 0, desired: 0 },
  { name: 'Node.js', current: 0, desired: 0 },
  { name: 'Python', current: 0, desired: 0 },
  { name: 'Data Analysis', current: 0, desired: 0 },
  { name: 'Machine Learning', current: 0, desired: 0 },
];

const SkillGap = () => {
    
  const [skills, setSkills] = useState(initialSkills);
  const [role, setRole] = useState('');

  const handleSkillChange = (index, type, value) => {
    const newSkills = [...skills];
    newSkills[index][type] = value;
    setSkills(newSkills);
  };

  const calculateGap = (current, desired) => {
    return Math.max(desired - current, 0);
  };

  const getRecommendations = (skill, gap) => {
    if (gap === 0) return 'Great job! You\'ve reached your desired skill level.';
    if (gap <= 2) return `Consider taking an intermediate course in ${skill}.`;
    return `Focus on intensive training or projects involving ${skill}.`;
  };

  return (
    <><Header/>
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        <h1 className="text-center mb-4">Skill Gap Analysis</h1>

        <div className="mb-4">
          <label htmlFor="role" className="form-label">Target Role</label>
          <input
            type="text"
            id="role"
            className="form-control"
            placeholder="e.g., Full Stack Developer"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Skill</th>
                <th>Current Level</th>
                <th>Desired Level</th>
                <th>Gap</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill, index) => (
                <tr key={skill.name}>
                  <td>{skill.name}</td>
                  <td>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={skill.current}
                      onChange={(e) => handleSkillChange(index, 'current', parseInt(e.target.value))}
                      className="form-range"
                    />
                    <span>{skill.current}/10</span>
                  </td>
                  <td>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={skill.desired}
                      onChange={(e) => handleSkillChange(index, 'desired', parseInt(e.target.value))}
                      className="form-range"
                    />
                    <span>{skill.desired}/10</span>
                  </td>
                  <td>
                    <span className="badge bg-primary">{calculateGap(skill.current, skill.desired)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <h2 className="h5">Analysis and Recommendations</h2>
          {skills.map((skill) => {
            const gap = calculateGap(skill.current, skill.desired);
            if (gap > 0) {
              return (
                <div key={skill.name} className="mb-3">
                  <strong>{skill.name}</strong>
                  <p>{getRecommendations(skill.name, gap)}</p>
                </div>
              );
            }
            return null;
          })}
        </div>

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <ChartBarIcon className="h3" />
                <h5 className="card-title">Total Skills Assessed</h5>
                <p className="card-text">{skills.length}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <LightBulbIcon className="h3" />
                <h5 className="card-title">Skills Needing Improvement</h5>
                <p className="card-text">{skills.filter(skill => calculateGap(skill.current, skill.desired) > 0).length}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <AcademicCapIcon className="h3" />
                <h5 className="card-title">Target Role</h5>
                <p className="card-text">{role || 'Not Set'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SkillGap;
