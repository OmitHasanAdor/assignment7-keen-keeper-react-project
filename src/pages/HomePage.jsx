import React, { Suspense } from 'react';
import Banner from '../component/Banner';
import Friends from '../component/Friends';

const bookPromise=fetch('/friends.json').then(res=>res.json())

const HomePage = () => {
    return (
        <div>
          <Banner></Banner>
          <Suspense fallback={<div className=' flex justify-center items-center'><span className="loading loading-spinner loading-xl"></span></div>}> 
          <Friends bookPromise={bookPromise}></Friends>
          </Suspense>
        </div>
    );
};

export default HomePage;