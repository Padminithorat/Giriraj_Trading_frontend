// SignInPage.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import forgotimg from '../img/SignInPageimg.svg';

const SignInPage = (onSignIn) => {

  return (
    <Container>
      <Row className="justify-content-md-center align-items-center">

      <Col md={6}>
          {/* Add your image here */}
          <img
            src={forgotimg}
            alt="SignInPageImage"
            className="img-fluid"
          />
        </Col>

        <Col md={6}>
          <h2 className="mt-5 mb-3">Sign In</h2>
          <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button className="learn-more-button" type="button" onClick={onSignIn}>
        Sign In
      </Button>

      <Row className="mt-3">
        <Col>
          <a href="/forgotPassword" className="forgot-password-link">
            Forgot Password?
          </a>
        </Col>
        <Col className="text-right">
          <a href="/signup" className="create-account-link">
            Create New Account
          </a>
        </Col>
      </Row>
    </Form>
        </Col>
      
      </Row>
    </Container>
  );
};

export default SignInPage;
