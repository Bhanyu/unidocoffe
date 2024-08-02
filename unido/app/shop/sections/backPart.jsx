import styles from "../../styles/shop.module.scss"

export default function BackPart(){
    return(
        <section id={styles.coffeBg}>
            <div className={styles.container}>
                <div className={styles.coffeBg__text}>
                    <h1 className={styles.coffeBg__title}>Coffee</h1>
                </div>
            </div>
        </section>
    )
}