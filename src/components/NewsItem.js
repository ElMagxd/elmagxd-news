import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsItem = ({article, number}) => {
   const date = new Date(article.publishedAt);
   return (
      <Col md={6} xl={4}>
         <div className="newsItem">
            <Link
               to={{
                  pathname: '/news/' + number,
                  state: article
               }}
               className="newsItem__heading"
            >
               {article.title}
            </Link>
            <div className="newsItem__bottom">
               <span className="newsItem__source">
                  {article.source.name}
               </span>
               <div className="newsItem__date">
                  {date.getDate()}
                  <span> / {date.getMonth() +1}</span>
               </div>
            </div>
         </div>
      </Col>
   );
};

export default NewsItem;