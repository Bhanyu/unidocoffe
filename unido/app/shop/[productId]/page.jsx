"use client";

import React, { useState } from 'react';

import { useParams} from 'next/navigation';
import Image from 'next/image';
import { useShop } from '../../context/ShopContext';
import styles from '../../styles/ProductPage.module.scss';
import singlePageBg from "../../../public/singlepagebg.png"

const ProductPage = () => {

  const params = useParams();

  const { productId } = params;
  const { products,addToCart } = useShop();

  const product = products.find((product) => product.id === parseInt(productId));

  if (!product) {
    return <p>Product not found</p>;
  }
const handleAddToCart = ()=>{
  addToCart(product)
}


  return (
<section id={styles.singlePage}>
  <div className={styles.singlePageBg}>
    <Image className={styles.pageBg}
    src={singlePageBg}
   />
  </div>
  <div className={styles.container}>
    <div className={styles.productForm}>
      <form  className={styles.searchForm}>
        <input
        type="text"
        placeholder="Search"
    
        />
        <button type="submit">Search</button>
      </form>
    </div>
  <div className={styles.productPage}>
<div className={styles.pageImg}>
<Image src={product.cardImage}  width={500} height={500} />
</div>

     
    <div className={styles.pageContent}>
    <h1>{product.desc}</h1>
      <p>{product.detailedDesc}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>ADD TO CART</button>
    </div>
    </div>
  </div>
</section>



 
  );
};



export default ProductPage;





  