// CourseCard.js
import React from 'react';
import { Star, Clock } from 'react-bootstrap-icons'; // Bootstrap icons
import { Button, Card } from 'react-bootstrap';

const CourseCard = ({ course }) => {
  return (
    <Card className="shadow-sm border-0 mb-4">
      <Card.Img variant="top" src={course.image} alt={course.title} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title className="text-truncate">{course.title}</Card.Title>
        <Card.Text className="text-muted">Mentor: {course.mentor}</Card.Text>
        <div className="d-flex align-items-center mb-3">
          <Star className="text-warning me-2" />
          <span>{course.rating}</span>
          <span className="text-muted ms-2">({course.students} students)</span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center text-muted">
            <Clock className="me-2" />
            <span>{course.duration}</span>
          </div>
          <Button variant="primary">Enroll Now</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
