import styles from "../styles/menu.module.scss"
import menu1 from "../../public/Screenshot 2024-07-21 103917.png"
import menu2 from "../../public/Screenshot 2024-07-21 103931.png"
import menu3 from "../../public/Screenshot 2024-07-21 103959.png"
import Image from "next/image"
import Link from "next/link"
export default function Menu(){
    return(
        <section id={styles.menuPart}>
            <div className={styles.menuPartContainer}>
                <div className={styles.menuPartTitle}>Menu</div>
                <div className={styles.menuPartContent}>
                    <Link className={styles.menuPartContentItem} href="https://cafeunido.com/menu/washingtondc901.pdf">
                        <Image className={styles.menuImg}
                        src={menu1}
                        alt="menu1" 
                        width={300}
                        height={300}
                        />
                    </Link>
                    <Link className={styles.menuPartContentItem} href="https://cafeunido.com/menu/washingtondc901.pdf">
                    <Image className={styles.menuImg}
                        src={menu2}
                        alt="menu2" 
                        width={300}
                        height={300}
                        />
                    </Link>
                    <Link className={styles.menuPartContentItem} href="https://cafeunido.com/menu/lacosecha.pdf">
                    <Image  className={styles.menuImg}
                        src={menu3}
                        alt="menu3" 
                        width={300}
                        height={300}
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}