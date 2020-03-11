import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NewsItem from '../components/NewsItem';
import { useSelector } from 'react-redux';

const NewsAll = () => {
   const articles = useSelector(state => state.data.articles);
   return (
      <section className="news">
         <Container>
            <Row>
               <Col>
                  <h2 className="home-heading">
                     Быть <br/>в курсе <span>событий</span>
                  </h2>
               </Col>
            </Row>
            <Row>
               {articles.map((item, index) => <NewsItem article={item} number={index} key={index}/>)}
            </Row>
         </Container>
      </section>
   );
};

export default NewsAll;