"use client";

import React, { createContext, useContext, useState } from 'react';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products] = useState([
    {
      id: 1,
      cardImage: '/unidocap.jpg',
      desc: "5 Pane Hat",
      detailedDesc: "This is a detailed description of the 5 Pane Hat.",
      price: 29.99,
    },
    {
      id: 2,
      cardImage: '/relaxo.jpg',
      desc: "Relaxo Hat",
      detailedDesc: "This is a detailed description of the Relaxo Hat.",
      price: 39.99,
    },
    {
      id: 3,
      cardImage: '/harpia.jpg',
      desc: "Harpia Hat",
      detailedDesc: "This is a detailed description of the Harpia Hat.",
      price: 49.99,
    },
    {
      id: 4,
      cardImage: '/blend.jpg',
      desc: "Blend Hat",
      detailedDesc: "This is a detailed description of the Blend Hat.",
      price: 59.99,
    },
    {
      id: 5,
      desc: "Product 1",
      price: 100,
      detailedDesc: "This is a detailed description of the Blend Hat.",
cardImage:'/damarli.jpg'
  },
  {
      id: 6,
      desc: "Product 2",
      price: 200,
      detailedDesc: "This is a detailed description of the Blend Hat.",
      cardImage:"/geisha.jpg"
  },
  {
      id: 7,
     desc: "Product 3",
      price: 300,
      detailedDesc: "This is a detailed description of the Blend Hat.",
      cardImage:"/relaxo.jpg"
  },
  {
      id: 8,
     desc: "Product 4",
      price: 400,
      detailedDesc: "This is a detailed description of the Blend Hat.",
      cardImage:"/harpia.jpg"
  },
  {
      id: 9,
     desc: "Product 5",
      price: 500,
      detailedDesc: "This is a detailed description of the Blend Hat.",
      cardImage:"/harpiaBig.jpg"
  }
  ]);

const [cart,setCart] = useState([]);
const removeFromCart = (productId) => {
  setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
};
const addToCart = (product) => {
  setCart((prevCart) => {
    const existingProduct = prevCart.find((item) => item.id === product.id);

    if (existingProduct) {
      return prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      return [...prevCart, { ...product, quantity: 1 }];
    }
  });
};
const incrementQuantity = (productId)=>{
  setCart((prevCart)=>{
    return prevCart.map((item)=>{
      if (item.id === productId) {
        return {...item, quantity: item.quantity + 1};
      }
      else{
        return item;
      }
    })
  })
}
const decrementQuantity = (productId)=>{
  setCart((prevCart)=>{
    return prevCart.map((item)=>{
     if (item.id === productId && item.quantity > 1 ) {
      return {...item, quantity: item.quantity - 1};
      
     }
     else{
      return item;
     }
    })
  })
}

const getTotalPrice = ()=>{
return cart.reduce((total,item)=> total + item.price * item.quantity, 0)
}
  return (
    <ShopContext.Provider value={{ products, cart, addToCart, incrementQuantity, decrementQuantity, getTotalPrice, removeFromCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);



