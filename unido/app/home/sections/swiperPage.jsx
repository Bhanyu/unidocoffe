import ProductSwiper from "@/app/components/ProductSwiper";
import react from "react";
import styles from "../../styles/home.module.scss"

export default function SwiperPage(){
    return(
        <section id={styles.swiper}>
            <h2>Locations</h2>
            <ProductSwiper/>
            <hr />
        </section>
       
    )
}