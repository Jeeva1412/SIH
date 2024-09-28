import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
 // Create this CSS file for styling

const features = [
  {
    title: "Personalized Learning Paths",
    description: "Our AI-driven system creates custom learning journeys tailored to your goals and current skill level.",
    image: "/images/Learning.png?height=300&width=400"
  },
  {
    title: "Expert-Led Courses",
    description: "Learn from industry leaders and top academics through our curated selection of high-quality courses.",
    image: "/images/Online learning-amico.png?height=300&width=400"
  },
  {
    title: "Interactive Coding Environments",
    description: "Practice your coding skills in real-time with our built-in IDE and instant feedback system.",
    image: "/images/Seminar-pana.png?height=300&width=400"
  },
  {
    title: "Progress Tracking",
    description: "Monitor your advancement with detailed analytics and performance insights.",
    image: "/images/Process-pana.png?height=300&width=400"
  }
];

const Overview_2 = () => {
  return (
    <Container>
      <header className="text-center mb-5 pt-3 pb-2 rounded-3">
        <h1>Our Features</h1>
        <p>Discover the tools that will accelerate your learning journey</p>
      </header>
      <Row className="g-4">
        {features.map((feature, index) => (
          <Col md={3} sm={6} key={index}>
            <Card className="custom-card h-100">  {/* Apply custom styles and ensure same height */}
              <Card.Img variant="top" src={feature.image} alt={feature.title} />
              <Card.Body className="d-flex flex-column">
                <Card.Title style={{ fontWeight: "500" ,paddingBottom:"20px"}}>{feature.title}</Card.Title>
                <Card.Text className='fs-6'>{feature.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Overview_2;
