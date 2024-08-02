
"use client";

import React from 'react';
import BackgroundPart from './home/sections/bgsection';
import Cards from './home/sections/cards';
import Panama from './home/sections/panama';
import Particles from './home/sections/particles';
import unidocap from '../public/unidocap.jpg';
import relaxo from '../public/relaxo.jpg'
import harpia from '../public/harpia.jpg';
import damarli from '../public/damarli.jpg'

import SwiperPage from './home/sections/swiperPage';


export default function Home() {
  const sampleProducts = [
    {
      id: 1,
      cardImage: unidocap,
      desc: "5 Pane Hat",
      button: "Add to Cart",
    },
    {
      id: 2,
      cardImage: damarli,
      desc: "Damarli Estate Bourbon Natural",
      button: "Add to Cart",
    },
    {
      id: 3,
      cardImage: harpia,
      desc: "Ninety Plus Geisha #23123",
      button: "Add to Cart",
    },
    {
      id: 4,
      cardImage: relaxo,
      desc: "Rancho Relaxo Decaf",
      button: "Add to Cart",
    },
  ];

  return (
    <div>
      <BackgroundPart />
      <Cards products={sampleProducts} />
      <Panama />
      <Particles />
      <SwiperPage/>
    </div>
  );
}
