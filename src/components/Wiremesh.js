import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom'; // Import necessary components from React Router
import '../components/Wiremesh.css';

const productData = [
  {
    id: 1,
    link: 'https://www.google.com',
    image: require('../img/cat1.jpeg'),
    title: 'Wiremesh',
    subtitle: 'Web Design'
  },
  {
    id: 2,
    link: 'https://www.google.com',
    image: require('../img/cat1.jpeg'),
    title: 'Conceal Lock',
    subtitle: 'Branding'
  },
  {
    id: 3,
    link: 'https://www.google.com',
    image: require('../img/cat1.jpeg'),
    title: 'Wool Pipe',
    subtitle: 'Web Design'
  },
  {
    id: 4,
    link: 'https://www.google.com',
    image: require('../img/cat1.jpeg'),
    title: 'Sliding WIndow Roller',
    subtitle: 'Branding'
  },
  {
    id: 5,
    link: 'https://www.google.com',
    image: require('../img/cat1.jpeg'),
    title: 'Louvers',
    subtitle: 'Photography'
  },
  {
    id: 6,
    link: 'https://www.google.com',
    image: require('../img/cat1.jpeg'),
    title: 'PVC Gasket',
    subtitle: 'Web Design'
  },
  {
    id: 7,
    link: 'https://www.google.com',
    image: require('../img/cat1.jpeg'),
    title: 'Domal Accessories',
    subtitle: 'Branding'
  },
  {
    id: 8,
    link: 'https://www.google.com',
    image: require('../img/cat1.jpeg'),
    title: 'Silicone Sealant',
    subtitle: 'Photography'
  },
  {
    id: 9,
    link: 'https://www.google.com',
    image: require('../img/cat1.jpeg'),
    title: 'Friction Stay',
    subtitle: 'Web Design'
  },
  {
    id: 10,
    link: 'https://www.google.com',
    image: require('../img/cat1.jpeg'),
    title: 'Floor Spring & Door Closer',
    subtitle: 'Web Design'
  },
  {
    id: 11,
    link: 'https://www.google.com',
    image: require('../img/cat1.jpeg'),
    title: 'Acrylic Foam Tape & Spacer Tape',
    subtitle: 'Web Design'
  },
  {
    id: 12,
    link: 'https://www.google.com',
    image: require('../img/cat1.jpeg'),
    title: 'Fiber Bidding',
    subtitle: 'Web Design'
  }
]

const itemsPerPage = 6; // Adjust this based on how many items you want per page

function Wiremesh() {
  const [activePage, setActivePage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(productData.length / itemsPerPage);

  // Calculate the start and end index for the current page
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPageData = productData.slice(startIndex, endIndex);

  // Dynamically create pagination items based on the total number of pages
  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => setActivePage(number)}
      >
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <section id="product" className="block product-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our product</h2>
          <div className="subtitle">Wiremesh</div>
        </div>
        <Row className='portfoliolist'>
          {currentPageData.map(product => (
            <Col sm={4} key={product.id}>
              <div className='portfolio-wrapper'>
              <button className="buy-now-button">Get Code To Buy Now</button>
                <Link to={product.link}>
                  <Image src={product.image} />
                  <div className='label text-center'>
                    <h3>{product.title}</h3>
                    <p>{product.subtitle}</p>
                    <FaHeart className="favorite-icon" />
                   
                  </div>

                </Link>
                
              </div>
              
            </Col>
            
          ))}
          
        </Row>
        <Pagination>{paginationItems}</Pagination>
      </Container>  
    </section>
  );
}

export default Wiremesh;
