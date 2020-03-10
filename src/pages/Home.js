import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NewsItem from '../components/NewsItem';

const Home = props => {
   const articles = props.data;
   return (
      <section className="home">
         <Container>
            <Row>
               <Col>
                  <h1 className="home-heading">
                     Всегда <br/>свежие <span>новости</span>
                  </h1>
               </Col>
            </Row>
            <Row>
               {articles.map((item, index) => {
                  return index < 6 && <NewsItem article={item} key={index} number={index}/>
               })}
            </Row>
         </Container>
      </section>
   );
};

export default Home;