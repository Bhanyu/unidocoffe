import styles from "../styles/aboutus.module.scss"
import React from 'react';
export default function Social(){
    return(
        <section id={styles.socialImpact}>
            <div className={styles.socialImpactContainer}>
                <h2 className={styles.socialImpactTitle}>Social Impact</h2>
            </div>
        </section>
    )
}