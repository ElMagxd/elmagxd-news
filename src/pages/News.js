import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewsAll from './NewsAll';
import NewsSingle from './NewsSingle';

const News = props => {
   console.log(props);
   return (
      <Switch>
         <Route
            exact
            path='/news'
            render={() => <NewsAll data={props.data}/>}
         />
         <Route
            path='/news/:number'
            component={NewsSingle}
         />
      </Switch>
   );
};

export default News;