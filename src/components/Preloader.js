import React from 'react';
import preloader from '../assets/img/preloader.svg';

const Preloader = () => {
   return (
      <div className='preloader'>
         <img src={preloader} alt='preloader'></img>
      </div>
   );
};

export default Preloader;