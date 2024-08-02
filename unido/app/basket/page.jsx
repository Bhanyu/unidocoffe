
"use client";



import React from "react";
import styles from "../styles/basket.module.scss"
import { useShop } from "../context/ShopContext"
const Basket = ()=>{
    const {cart, incrementQuantity, decrementQuantity, getTotalPrice, removeFromCart } = useShop();
    return (
        <section id={styles.basket}>
            <h1>Shopping Basket</h1>
           {cart.length === 0 ? (
            <p>Basket is empty</p>
           ):(
            <div className={styles.basketItems}>
                {
                    cart.map((item)=>{
                        return(
                            <div key={item.id} className={styles.basketItem}>
                                <img src={item.cardImage} alt={item.desc} className={styles.basketItemImg}/>
                            <div className={styles.basketItemDetails}>
                                <h2>{item.desc}</h2>
                                <p>Price: ${item.price}</p>
                                <div className={styles.countCtrl}>
                                    <button onClick={()=>decrementQuantity(item.id)} className={styles.decrement}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={()=>incrementQuantity(item.id)} className={styles.increment}>+</button>
                                </div>
                                <p>Total: ${item.price * item.quantity}</p>
                                <button onClick={() => removeFromCart(item.id)} className={styles.delete}>Delete</button>
                            </div>
                            
                            
                            
                            </div>
                        )
                    })
                }
                <div className={styles.total}>
                    <p>Total: ${getTotalPrice().toFixed(2)}</p>
                </div>
            </div>
           )}
        </section>
    )
}
export default Basket