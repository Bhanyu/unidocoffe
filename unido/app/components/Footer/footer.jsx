import classNames from "classnames";
import styles from "../Footer/footer.module.scss";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer(){
    return(
        <footer id={styles.footer}>
            <div className={classNames("container", styles.footerContainer)} >
                <div className={classNames("row", styles.footerInner)}>
                    <div className={classNames("col-12 col-md-4 col-lg-3", styles.footerCol)}>
                        <h3>Basics</h3>
                        <div className={styles.colDesc}>
                            <ul className={styles.innerList}>
                                <li><Link className={styles.listLink} href="#">Sustainability</Link></li>
                                <li><Link className={styles.listLink} href="#">Our Coffe</Link></li>
                                <li><Link className={styles.listLink} href="#">FAQ</Link></li>
                                <li><Link className={styles.listLink} href="#">News</Link></li>
                                <li><Link className={styles.listLink} href="#">Terms and Conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={classNames("col-12 col-md-4 col-lg-2", styles.footerCol)}>
                        <h3>Shop</h3>
                        <div className={styles.colDesc}>
                            <ul className={styles.innerList}>
                                <li><Link className={styles.listLink} href="#">Coffe</Link></li>
                                <li><Link className={styles.listLink} href="#">Unido Gear</Link></li>
                              
                            </ul>
                        </div>
                    </div>
                    <div className={classNames("col-12 col-md-4 col-lg-2", styles.footerCol)}>
                        <h3>Community</h3>
                        <div className={styles.colDesc}>
                            <ul className={styles.innerList}>
                                <li><Link className={styles.listLink} href="#">About Us</Link></li>
                                <li><Link className={styles.listLink} href="#">Careers</Link></li>
                            
                            </ul>
                        </div>
                    </div>
                    <div className={classNames("col-12 col-md-4 col-lg-2", styles.footerCol)}>
                        <h3>Contact</h3>
                        <div className={styles.colDesc}>
                            <ul className={styles.innerList}>
                                <li><Link className={styles.listLink} href="#">Location</Link></li>
                                <li><Link className={styles.listLink} href="#">Email</Link></li>
                              
                            </ul>
                        </div>
                    </div>
                </div>
                <p className={styles.copyWrite}>
                Coffee roasters Unidos S.A 2022
                </p>
            </div>
        </footer>
    )
}
