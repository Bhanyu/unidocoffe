import styles from "../styles/aboutus.module.scss"
import React from 'react';
import FileUpDate from "./file";
export default function Work(){
    return(
        <section id={styles.workAtUnido}>
            <div className={styles.workContainer}>
            <div className={styles.WorkTitle}>
          <h1>Work at Unido</h1>
        </div>
        <div className={styles.workAtUnidoForm}>
           <form className={styles.unidoForm}>
            <input className={styles.name} type="text" placeholder="name" />
            <input className={styles.lastname} type="text" placeholder="LastName" />
            <input className={styles.email} type="email"  placeholder="Email"/>
            <input className={styles.number} type="number"  placeholder="Number"/>
            <textarea name="comment" id="comment" cols="40" rows="4" placeholder="comments"></textarea>
           <FileUpDate/>
           <button className={styles.submit}>SUBMIT</button>
           </form>
           
        </div>
            </div>
            <hr />
        </section>
    )
}