


"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ShopProduct.module.scss';
import { useShop } from '../context/ShopContext';
const ShopProductCard = ({ shopProduct }) => {
  const { addToCart } = useShop();
  return (
    <div className={styles.shopCard}>
    
      <Link className={styles.cardLink} href={`/shop/${shopProduct.id}`}>
        <span className={styles.productPrice}>${shopProduct.price}.00</span>
      <Image className={styles.linkImage} src={shopProduct.cardImage} alt={shopProduct.desc} width={300} height={300} />
      <h2 className={styles.link_desc}>{shopProduct.desc}</h2>
        <button className={styles.addToCartButton} onClick={()=>addToCart(shopProduct)}>ADD TO CART </button>
        <p className={styles.cardDesc}>{shopProduct.mainDesc}</p>
        <p className={styles.productMass}>{shopProduct.mass}</p>
      </Link>
    </div>
  );
};

export default ShopProductCard;