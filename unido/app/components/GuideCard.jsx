


"use client";

import React from 'react';

import styles from '../styles/GuideCard.module.scss'
import Link from 'next/link';
const GuideCard=({guide})=>{
    return(
     
         <div className={styles.guideInnerCard}>
    
         <Link className={styles.guideLink} href={`/learn/${guide.id}`}>

<div className={styles.guideCardContent}>
<h2 className={styles.guideTitle}>{guide.title}</h2>
           <button className={styles.moveBtn}>{guide.move} </button>
</div>
         </Link>
       </div>
    )
}
export default GuideCard