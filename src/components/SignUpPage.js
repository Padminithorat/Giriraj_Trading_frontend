// SignUpPage.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import UserProfile from './UserProfile';
import forgotimg from '../img/SignUpPageimg.svg';

const SignUpPage = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    companyName: '',
    gstNumber: '',
  });

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const handleSignUp = () => {
    // For simplicity, you can just log the user data for now
    console.log('User:', user);
  };

  return (
    <Container>
      <Row className="justify-content-md-center align-items-center">
        <Col md={6}>
          <img src={forgotimg} alt="SignUpPageImage" className="img-fluid" />
        </Col>

        <Col md={6}>
          <h2 className="mt-5 mb-3">Sign Up</h2>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formCompanyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Company Name"
                onChange={(e) => setUser({ ...user, companyName: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formgstno">
              <Form.Label>GST Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your GST Number/Pan Card Number"
                onChange={(e) => setUser({ ...user, gstNumber: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label={<span>I agree to the <a href="#t_c">Terms and Conditions</a></span>}
                checked={agreeTerms}
                onChange={handleCheckboxChange}
              />
            </Form.Group>

            <Button className="learn-more-button" type="button" onClick={handleSignUp}>
              Sign Up
            </Button>


            <Row className="mt-3">
              <Col>
                <p className="already-have-account-text">
                  Already have an account? <a href="/signIn">Sign In</a>
                </p>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;
