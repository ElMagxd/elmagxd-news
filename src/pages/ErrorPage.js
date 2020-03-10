import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ErrorPage = () => {
   return (
      <section className="errorPage">
         <Container>
            <Row>
               <Col>
                  <h2 className="errorPage-message">404</h2>
                  <p className="errorPage-desc">We can't find this page</p>
               </Col>
            </Row>
         </Container>
      </section>
   );
};

export default ErrorPage;