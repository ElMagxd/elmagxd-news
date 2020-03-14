import React from 'react';
import preloader from '../preloader.svg';

const Preloader = () => {
   return (
      <div className='preloader'>
         <img src={preloader} alt='preloader'></img>
      </div>
   );
};

export default Preloader;