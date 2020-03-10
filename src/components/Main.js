import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import News from '../pages/News';
import Contacts from '../pages/Contacts';
import axios from 'axios';

const useFetch = () => {
   const [data, updateData] = useState(null);
   const requestUrl = 'http://newsapi.org/v2/top-headlines?' +
                      'country=ua&' +
                      'apiKey=63ecc0e3912242beafda834c6930d4a4';
   useEffect(() => {
      const fetchData = async () => {
         const response = await axios.get(requestUrl);
         updateData(response.data);
      }
      fetchData();
   }, [requestUrl]);
   return data;
}

const Main = () => {
   const result = useFetch();
   return (
      <main className="main">
         <Switch>
            <Route
               path='/'
               exact
               render={() => result && <Home data={result.articles}/>}
            />
            <Route
               path='/news' 
               render={() => result && <News data={result.articles}/>}
            />
            <Route exact path='/contacts' component={Contacts}/>
         </Switch>
      </main>
   );
};

export default Main;