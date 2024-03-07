import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown, Modal, Button } from 'react-bootstrap';
import { FaUser, FaShoppingCart, FaHeart } from 'react-icons/fa';
import Logo from './logo.png';
import SignInForm from './SignInForm';  // Replace with the actual path to your SignInForm component
import SignUpForm from './SignUpForm';  // Replace with the actual path to your SignUpForm component
import '../App.css';
import { Link } from 'react-router-dom';



const CustomNavbar = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignIn = () => {
    // Handle sign-in logic
    setShowSignIn(false);
  };

  const handleSignUp = () => {
    // Handle sign-up logic
    setShowSignUp(false);
  };

  useEffect(() => {
    // Trigger the modal to show after the component mounts
    setShowSignIn(true);
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <>
      {/* Main Navbar */}
      <Navbar expand="lg" bg="white" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={Logo}
              alt="Logo"
              height="50"
              className="d-inline-block align-top mr-3"
            />
          </Navbar.Brand>
          <Nav className="ml-auto" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Nav.Link href="#Shopping" style={{ marginRight: '15px' }}><FaShoppingCart className="cart-icon" /></Nav.Link>
            {/* <Nav.Link href="#favourites" style={{ marginRight: '15px' }}><FaHeart className="heart-icon" /></Nav.Link> */}
            <NavDropdown title={<FaUser className="profile-icon" />} id="collapsible-nav-dropdown">
            <NavDropdown.Item onClick={() => setShowSignIn(true)}>Sign In</NavDropdown.Item>
            <NavDropdown.Item onClick={() => setShowSignUp(true)}>Sign Up</NavDropdown.Item>
            {/* Profile icon as a link to the profile page */}
            <NavDropdown.Item as={Link} to="/userinfo">Profile</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        </Container>
      </Navbar>

     {/* Second Navbar */}
     <Navbar bg="dark" variant="dark" expand="lg" className="second-navbar">
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-second-navbar" />
          <Navbar.Collapse id="responsive-second-navbar">
            <Nav className="mr-auto marquee">
            <Nav.Link as={Link} to="/wiremesh">Wiremesh</Nav.Link>
              <Nav.Link as={Link} to="/conceal_lock">Conceal Lock</Nav.Link>
              <Nav.Link as={Link} to="/wool_pipe">Wool Pipe</Nav.Link>
              <Nav.Link as={Link} to="/sliding_window_roller">Sliding Window Roller</Nav.Link>
              <Nav.Link as={Link} to="/louvers">Louver's</Nav.Link>
              <Nav.Link as={Link} to="/pvc_gasket">PVC Gasket</Nav.Link>
              <Nav.Link as={Link} to="/domal_accessories">Domal Accessories</Nav.Link>
              <Nav.Link as={Link} to="/silicone_sealant">Silicone Sealant</Nav.Link>
              <Nav.Link as={Link} to="/friction_stay">Friction Stay</Nav.Link>
              <Nav.Link as={Link} to="/floor_spring_&_door_closer">Floor Spring & Door Closer</Nav.Link>
              <Nav.Link as={Link} to="/Acrylic_Foam_Tape_&_Spacer_Tape">Acrylic Foam Tape & Spacer Tape</Nav.Link>
              <Nav.Link as={Link} to="/Fiber_Bidding">Fiber Bidding</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sign In Modal */}
      <Modal show={showSignIn} onHide={() => setShowSignIn(false)}>
        <Modal.Header closeButton>
          <Modal.Title  className="modal_title">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignInForm onSignIn={handleSignIn} />
        </Modal.Body>
      </Modal>

      {/* Sign Up Modal */}
      <Modal show={showSignUp} onHide={() => setShowSignUp(false)} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title  className="modal_title">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUpForm onSignUp={handleSignUp} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomNavbar;
