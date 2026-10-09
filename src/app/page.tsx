import React from 'react';
import Banner from './components/Banner';
import IncreaseProducts from './components/IncreaseProducts';
import DecreaseProducts from './components/DecreaseProducts';

const homePage = () => {
  return (
    <div>
      <Banner />
      <IncreaseProducts />
      <DecreaseProducts />
    </div>
  );
};

export default homePage;