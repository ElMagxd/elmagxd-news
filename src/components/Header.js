import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <header className="header">
         <Container>
            <Row className="align-items-center">
               <Col md={4}>
                  <Link to='/' className="logo">
                     ELMG News
                  </Link>
               </Col>
               <Col md={8}>
                  <nav>
                     <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/news'>News</Link></li>
                        <li><Link to='/contacts'>Contacts</Link></li>
                     </ul>
                  </nav>
               </Col>
            </Row>
         </Container>
      </header>
   );
};

export default Header;