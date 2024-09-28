import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faGraduationCap, faLightbulb, faClock } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';

const courses = [
  { id: 1, title: "Introduction to Programming", level: "Beginner", duration: "4 weeks", completed: true },
  { id: 2, title: "Web Development Fundamentals", level: "Beginner", duration: "6 weeks", completed: true },
  { id: 3, title: "JavaScript Essentials", level: "Intermediate", duration: "8 weeks", completed: false },
  { id: 4, title: "React Basics", level: "Intermediate", duration: "6 weeks", completed: false },
  { id: 5, title: "Advanced React Patterns", level: "Advanced", duration: "8 weeks", completed: false },
  { id: 6, title: "Node.js and Express", level: "Intermediate", duration: "6 weeks", completed: false },
  { id: 7, title: "Database Design with MongoDB", level: "Intermediate", duration: "4 weeks", completed: false },
  { id: 8, title: "Full Stack Project", level: "Advanced", duration: "10 weeks", completed: false },
];

const AdaptiveLearning= () => {
  const [currentCourseId, setCurrentCourseId] = useState(3);
  const currentCourse = courses.find(course => course.id === currentCourseId);
  const completedCourses = courses.filter(course => course.completed);
  const recommendedCourses = courses.filter(course => !course.completed && course.id !== currentCourseId);

  const handleCourseCompletion = () => {
    const updatedCourses = courses.map(course => 
      course.id === currentCourseId ? { ...course, completed: true } : course
    );
    const nextCourse = updatedCourses.find(course => !course.completed);
    if (nextCourse) {
      setCurrentCourseId(nextCourse.id);
    }
  };

  return (
    <>
    <Header/>
   
    <div className="container my-5 text-start">
      <h1 className="text-center mb-4">Your Adaptive Learning Journey</h1>

      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">Current Progress</h2>
          <p>Your personalized learning path adapts as you progress.</p>
          <div className="row">
            <div className="col-md-6">
              <strong>Current Course:</strong> {currentCourse?.title}
            </div>
            <div className="col-md-6">
              <strong>Courses Completed:</strong> {completedCourses.length}
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">Current Course</h2>
          <p><strong>Title:</strong> {currentCourse?.title}</p>
          <p><strong>Level:</strong> {currentCourse?.level}</p>
          <p><strong>Duration:</strong> {currentCourse?.duration}</p>
          <button onClick={handleCourseCompletion} className="btn btn-primary">Mark as Completed</button>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Recommended Next Steps</h2>
          <ul className="list-group">
            {recommendedCourses.slice(0, 3).map((course) => (
              <li key={course.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
                  <div>
                    <strong>{course.title}</strong>
                    <div>
                      <FontAwesomeIcon icon={faLightbulb} className="me-1" />
                      <span>{course.level}</span>
                      <FontAwesomeIcon icon={faClock} className="ms-3 me-1" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>
                <FontAwesomeIcon icon={faChevronRight} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdaptiveLearning;
