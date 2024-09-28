import React from 'react';
import { CheckCircle, People, Book, Globe } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  return (
    <div className="bg-light min-vh-100 text-start">
      <header className="bg-primary text-white py-5">
        <div className="container">
          <h1 className="display-4 mb-4">About EduConnect</h1>
          <p className="lead">Empowering learners worldwide through innovative online education</p>
        </div>
      </header>

      <main className="container py-5">
        <section className="mb-5">
          <h2 className="display-5 text-primary mb-4">Our Mission</h2>
          <p className="small text-muted mb-4">
            At EduConnect, we're on a mission to revolutionize online education by connecting passionate learners with expert mentors from around the globe. Our platform provides accessible, high-quality courses that empower individuals to achieve their personal and professional goals.
          </p>
          <div className='row gx-5 '>
            <div className='col-4'>
            <img 
            src="/images/Seminar-rafiki.png" 
            alt="Students learning online" 
            className="img-fluid rounded shadow-sm "
            style={{ height:"400px"
            }}
          />
            </div>
            <div className='col-4'>
           <img 
            src="/images/college project-rafiki.png" 
            alt="Students learning online" 
            className="img-fluid rounded shadow-sm "
            style={{ height:"400px"
            }}
          /></div>
            <div className='col-4'>
            <img 
            src="/images/Online learning-rafiki.png" 
            alt="Students learning online" 
            className="img-fluid rounded shadow-sm "
            style={{ height:"400px"
            }}
          />
            </div>
          
           
          </div>
        </section>

        <section className="mb-5">
          <h2 className="display-5 text-primary mb-4">What Sets Us Apart</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <CheckCircle className="h1 text-primary mb-3" />
                  <h5 className="card-title font-weight-bold">Expert-Led Courses</h5>
                  <p className="card-text small text-muted">Learn from industry professionals and academics at the forefront of their fields.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <People className="h1 text-primary mb-3" />
                  <h5 className="card-title font-weight-bold">Interactive Community</h5>
                  <p className="card-text small text-muted">Engage with peers and mentors in our vibrant learning community.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <Book className="h1 text-primary mb-3" />
                  <h5 className="card-title font-weight-bold">Personalized Learning Paths</h5>
                  <p className="card-text small text-muted">Tailored course recommendations based on your goals and progress.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <Globe className="h1 text-primary mb-3" />
                  <h5 className="card-title font-weight-bold">Global Reach</h5>
                  <p className="card-text small text-muted">Access courses and connect with learners from all corners of the world.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="display-5 text-primary mb-4">Our Story</h2>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <p className="small text-muted mb-4">
                Founded in 2020, EduConnect was born out of a passion for democratizing education. Our founders, a group of educators and tech enthusiasts, recognized the need for a platform that could bridge the gap between quality education and global accessibility.
              </p>
              <p className="small text-muted">
                Today, we're proud to have helped over 1 million learners achieve their goals, with a growing community of 5,000+ expert mentors and 500+ courses across various disciplines.
              </p>
            </div>
            <div className="col-md-6">
              <img 
                src="/images/College campus-rafiki.png?height=400&width=600" 
                alt="EduConnect team" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="display-5 text-primary mb-4">Join Us in Shaping the Future of Education</h2>
          <p className="small text-muted mb-4">
            Whether you're here to learn, teach, or both, EduConnect welcomes you to be part of our growing community. Together, we can unlock the power of knowledge and create a brighter future for learners everywhere.
          </p>
          <Link className="btn btn-primary btn-lg" to="/courses">
            Explore Our Courses
          </Link>
        </section>
      </main>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; 2024 EduConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default AboutUsPage;
