import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import News from '../pages/News';
import Contacts from '../pages/Contacts';
import ErrorPage from '../pages/ErrorPage';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { updateReduxData } from '../actions';
import Preloader from './Preloader';

const Main = () => {
   const [isLoading, setLoading] = useState(true);

   const useFetch = () => {
      const dispatch = useDispatch();
      const requestUrl = 'http://newsapi.org/v2/top-headlines?' +
                         'country=ua&' +
                         'apiKey=63ecc0e3912242beafda834c6930d4a4';
      useEffect(() => {
         const fetchData = async () => {
            setLoading('true');
            const response = await axios.get(requestUrl);
            dispatch(updateReduxData(response.data));
            if (response.status >= 200 && response.status < 300) {setLoading(false);}
         }
         fetchData();
      }, [dispatch, requestUrl]);
      const reduxData = useSelector(state => state.data);
      return reduxData;
   };

   const result = useFetch();

   if (isLoading) {return <Preloader/>}

   return (
      <main className="main">
         <Switch>
            <Route
               path='/news' 
               render={() => result && <News/>}
            />
            <Route
               exact
               path='/contacts'
               component={Contacts}
            />
            <Route
               path='/'
               exact
               render={() => result && <Home/>}
            />
            <Route path='*'>
               <ErrorPage/>
            </Route>
         </Switch>
      </main>
   );
};

export default Main;