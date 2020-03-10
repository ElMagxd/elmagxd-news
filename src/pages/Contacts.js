import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import photo from '../photo-cropped.jpg'

const Contacts = () => {
   return (
      <section className="contacts">
         <Container>
            <Row>
               <Col lg={6}>
                  <div className="contacts-content">
                     <a
                        className="contacts-content__tel"
                        href="tel:+380954784658"
                     >
                        +38 (095) 47 84 658
                     </a>
                     <p className="contacts-content__name">
                        Гранкин <br/>Виталий
                     </p>
                     <a
                        className="contacts-content__mail"
                        href="mailto:elmagxd@gmail.com"
                     >
                        elmagxd@gmail.com
                     </a>
                     <p className="contacts-content__position">
                        Front-end developer
                     </p>
                     <p className="contacts-content__stack">
                        HTML, CSS (SCSS), JS (ES5, ES6), <span>React.js</span>
                     </p>
                  </div>
               </Col>
               <Col lg={6}>
                  <img
                     src={photo}
                     alt="My face ;)"
                     className="contacts-photo"
                  />
               </Col>
            </Row>
         </Container>
      </section>
   );
};

export default Contacts;