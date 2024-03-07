// SignInForm.js
import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import '../components/SignInForm.css';

const SignInForm = ({ onSignIn }) => {
  return (
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
  );
};

export default SignInForm;
