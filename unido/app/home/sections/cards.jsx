import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";

import styles from "../../styles/home.module.scss";

import ProductCard from "../../components/ProductCard";

export default function Cards({products}) {
  return (
    <section id={styles.cardsection}>
      <div className={styles.container}>
        <h2 className={styles.staff}>Staff Favorites</h2>
        <div className={styles.cards_part}>
         {products && products.map((product)=>{
          return(
            <ProductCard key={product.id} product={product}/>
          )
         }) }
        </div>
      </div>
    </section>
  );
}
