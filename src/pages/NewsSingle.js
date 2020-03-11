import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

const NewsSingle = props => {
   const article = props.location.state;
   if (!article) {
      return <Redirect to='/'/>
   }
   const date = new Date(article.publishedAt);
   return (
      <section className="singleNews">
         <Container>
            <Row>
               <Col xl={5}>
                  <h2 className="singleNews-title">
                     {article.title}
                  </h2>
                  <p className="singleNews-source">
                     {article.source.name}
                  </p>
                  <div className="newsItem__date">
                     {date.getDate()}
                     <span> / {date.getMonth() +1}</span>
                  </div>
               </Col>
               <Col xl={7}>
                  <img
                     src={article.urlToImage}
                     alt={article.title}
                     className="singleNews-image"   
                  />
                  <p className="singleNews-description">
                     {article.description}
                  </p>
               </Col>
            </Row>
         </Container>
      </section>
   );
};

export default NewsSingle;