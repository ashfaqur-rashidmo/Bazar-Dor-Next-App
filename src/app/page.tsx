import React from 'react';
import Banner from './components/Banner';
import IncreaseProducts from './components/IncreaseProducts';
import DecreaseProducts from './components/DecreaseProducts';
import AllProducts from './components/AllProducts';

const homePage = () => {
  return (
    <div>
      <Banner />
      <IncreaseProducts />
      <DecreaseProducts />
      <AllProducts />
    </div>
  );
};

export default homePage;