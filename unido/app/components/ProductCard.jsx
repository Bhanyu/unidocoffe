


"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useShop } from '../context/ShopContext';

import styles from '../styles/ProductCard.module.scss';

const ProductCard = ({ product }) => {
const {addToCart} = useShop()

  return (
    <div className={styles.singlecard}>
    
      <Link className={styles.cardlink} href={`/shop/${product.id}`}>
      <Image className={styles.linkimage} src={product.cardImage} alt={product.desc} width={300} height={300} />
      <h2 className={styles.link_desc}>{product.desc}</h2>
        <button className={styles.addToCartButton} onClick={()=>addToCart(product)} >Add To Cart </button>
      </Link>
    </div>
  );
};

export default ProductCard;

