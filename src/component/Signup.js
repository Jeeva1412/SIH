import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Container, Card, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Header from './Header';

// Styled component for the background
const BackgroundContainer = styled(Container)`
  background: url('/path/to/your/light-dark-background.jpg'); // Replace with your image path
  background-size: cover; // Cover the entire background
  background-position: center; // Center the background image
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styled component for the form card
const StyledCard = styled(Card)`
  background: white; // White background for the card
  border-radius: 10px; // Rounded corners
  width: 400px; // Set a specific width for the card
  height: auto; // Set to auto to maintain content height
  padding: 20px; // Padding for the card
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Shadow for depth
`;

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'student', // Default to student
  });

  // Scroll to the signup section on component load
  useEffect(() => {
    const signupElement = document.getElementById('signupElement');
    if (signupElement) {
      window.scrollTo({
        top: signupElement.offsetTop - 100, // Adjust to scroll just below the header
        behavior: 'smooth',
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the password and confirm password are the same
    if (formData.password !== formData.confirmPassword) {
      alert('Password and Confirm Password do not match!');
      return; // Stop form submission
    }

    // Log the form details in the console
    console.log('Form submitted:', formData);

    // You can also clear the form fields after submission if desired:
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      userType: 'student',
    });
  };

  return (
    <>
      <Header />
      <BackgroundContainer fluid >
        <StyledCard className="shadow-sm w-50" >
          <Card.Body id="signupElement">
            <h2 className="text-center mb-3">Create Your Account</h2>
            <p className="text-center mb-4">Join our community and start your learning journey today!</p>
            <Form onSubmit={handleSubmit} className="mx-5 pt-3">
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  style={{ fontSize: '0.9rem', textTransform: 'none' }} // Ensure text is not capitalized
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  style={{ fontSize: '0.9rem', textTransform: 'none' }} // Ensure text is not capitalized
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Password"
                  style={{ fontSize: '0.9rem' }} // Smaller font size
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm Password"
                  style={{ fontSize: '0.9rem' }} // Smaller font size
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Select
                  id="userType"
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  required
                  style={{ fontSize: '0.9rem' }} // Smaller font size
                >
                  <option value="student">Student</option>
                  <option value="mentor">Mentor</option>
                </Form.Select>
              </Form.Group>
              <Button type="submit" className="btn btn-primary w-100">
                Sign Up
              </Button>
            </Form>
            <p className="text-center mt-3">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </Card.Body>
        </StyledCard>
      </BackgroundContainer>
    </>
  );
};

export default Signup;
