import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
   return (
      <header className="header">
         <Container>
            <Row className="align-items-center">
               <Col xs={6} sm={4}>
                  <Link to='/' className="logo">
                     ELMG News
                  </Link>
               </Col>
               <Col xs={6} sm={8}>
                  <nav>
                     <ul>
                        <li className="d-none d-sm-block"><NavLink exact to='/'>Home</NavLink></li>
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