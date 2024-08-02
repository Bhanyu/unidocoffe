import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Image from "next/image";
import panamabook from "../../../public/unido.book.png"
import styles from "../../styles/home.module.scss";
export default function Panama(){
    return(
        <section id={styles.panamaPart}>
            <div className={styles.container}>
                <div className={styles.panamaCommon}>
                    <div className={styles.panamaImg}>
                        <Image  className={styles.panamapc}
                        src={panamabook}/>
                        
                    </div>
                    <div className={styles.panamaText}>
                        <h2>GEISHA </h2>
                        <p>The World’s Most Exotic Coffee.</p>
<Link className={styles.geishalink} href="#">LET'S TALK ABOUT GEISHA</Link>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
