import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewsAll from './NewsAll';
import NewsSingle from './NewsSingle';

const News = () => {
   return (
      <Switch>
         <Route
            exact
            path='/news'
            component={NewsAll}
         />
         <Route
            path='/news/:number'
            component={NewsSingle}
         />
      </Switch>
   );
};

export default News;