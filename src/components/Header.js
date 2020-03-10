import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

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
                        <li><NavLink exact to='/'>Home</NavLink></li>
                        <li><NavLink to='/news'>News</NavLink></li>
                        <li><NavLink to='/contacts'>Contacts</NavLink></li>
                     </ul>
                  </nav>
               </Col>
            </Row>
         </Container>
      </header>
   );
};

export default Header;