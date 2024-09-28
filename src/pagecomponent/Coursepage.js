// CoursesPage.js
import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CourseCard from '../component/CourseCard';
import Header from '../component/Header';

const courses = [
  {
    id: 1,
    title: "Introduction to React",
    mentor: "John Doe",
    rating: 4.8,
    students: 1234,
    duration: "10 hours",
    image: "/images/Learning-cuate.png"
  },
  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    mentor: "Jane Smith",
    rating: 4.9,
    students: 2345,
    duration: "15 hours",
    image: "/images/Back to school-rafiki.png"
  },
  {
    id: 3,
    title: "Python for Data Science",
    mentor: "Mike Johnson",
    rating: 4.7,
    students: 3456,
    duration: "20 hours",
    image: "/images/Lesson-pana.png"
  },
  {
    id: 4,
    title: "Machine Learning Fundamentals",
    mentor: "Emily Brown",
    rating: 4.6,
    students: 4567,
    duration: "25 hours",
    image: "/images/Online learning-amico.png"
  },
  {
    id: 5,
    title: "Web Design Principles",
    mentor: "Chris Wilson",
    rating: 4.5,
    students: 5678,
    duration: "12 hours",
    image: "/images/Exams-pana.png"
  },
  {
    id: 6,
    title: "iOS App Development with Swift",
    mentor: "Sarah Lee",
    rating: 4.8,
    students: 6789,
    duration: "18 hours",
    image: "/images/Exams-bro.png"
  },
  {
    id: 7,
    title: "Blockchain Technology",
    mentor: "Tom Anderson",
    rating: 4.7,
    students: 7890,
    duration: "14 hours",
    image: "/images/pngimg-1.png"
  },
  {
    id: 8,
    title: "Digital Marketing Strategies",
    mentor: "Lisa Chen",
    rating: 4.6,
    students: 8901,
    duration: "16 hours",
    image: "/images/Teaching-amico.png"
  },
  {
    id: 9,
    title: "Cloud Computing with AWS",
    mentor: "David Kim",
    rating: 4.9,
    students: 9012,
    duration: "22 hours",
    image: "/images/Children preparing their backpack-rafiki.png"
  },
  {
    id: 10,
    title: "Cybersecurity Essentials",
    mentor: "Rachel Green",
    rating: 4.8,
    students: 10123,
    duration: "20 hours",
    image: "/images/College admission-amico.png"
  },
  {
    id: 11,
    title: "Artificial Intelligence Ethics",
    mentor: "Alex Morgan",
    rating: 4.7,
    students: 11234,
    duration: "10 hours",
    image: "/images/College entrance exam-amico.png"
  },
  {
    id: 12,
    title: "Game Development with Unity",
    mentor: "Sam Taylor",
    rating: 4.8,
    students: 12345,
    duration: "30 hours",
    image: "/images/img6.jpg"
  }
];

const CoursesPage = () => {
  useEffect(()=>{
    const courseid =document.getElementById('courseid');
    window.scrollTo(
      {
        top:courseid.offsetTop,
        behavior:'smooth'
      }
    );
  },[])
  return (
    <>
    <Header/>
    <Container className="py-5" id='courseid'>
      <h1 className="text-center mb-4">Our Courses</h1>
      <Row>
        {courses.map((course) => (
          <Col lg={3} md={4} sm={6} xs={12} key={course.id} className="d-flex pb-5">
            <CourseCard course={course} />
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
};

export default CoursesPage;
