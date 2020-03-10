import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <footer className="footer">
         <Container>
            <Row className="align-items-center">
               <Col md={4}>
                  <div className="logo-wrapper">
                     <Link to='/' className="logo">
                        ELMG News
                     </Link>
                     <span className="spa">
                        Single Page Application
                     </span>
                  </div>
               </Col>
               <Col md={4}>

               </Col>
               <Col md={4}>
                  <div className="madeby">
                     <span className="madeby__head">
                        Made by
                     </span>
                     <span className="madeby__name">
                        Grankin Vitaliy
                     </span>
                  </div>
               </Col>
            </Row>
         </Container>
      </footer>
   );
};

export default Footer;