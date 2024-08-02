import "bootstrap/dist/css/bootstrap.min.css";
import classNames from "classnames";
import Link from "next/link";
import styles from "../../styles/home.module.scss";
export default function Particles() {
  return (
    <section id={styles.particlesPart}>
      <div className={classNames("container", styles.container)}>
        <div className={classNames("row", styles.row)}>
          <div className={classNames(" col-12 col-md-6 col-lg-4", styles.col)}>
           <Link href="#">
           <div className={classNames("card", styles.card)}>
              <div className={classNames("card-body", styles.cardBody1)}>
              <div className={classNames("card-content", styles.cardContext)}>
              <h5 className={classNames("card-title", styles.cardTitle)}>
                  About Us
                </h5>
                <p className={classNames("card-text", styles.cardText)}>
                  For a cup of coffee to be truly special it needs to pass
                  through many hands and be treated with passion and commitment
                  in every link of the chain. From the producer to the roaster,
                  the barista to the customer, back to the producer and the
                  harvester, it’s a process that repeats itself every time we
                  serve a cup of coffee and needs to be cared for every step of
                  the way.,
                </p>
             </div>
              </div>
            </div>
           </Link>
          </div>
          <div className={classNames(" col-12 col-md-6 col-lg-4", styles.col)}>
           <Link href="#">
           <div className={classNames("card", styles.card)}>
              <div className={classNames("card-body", styles.cardBody2)}>
              <div className={classNames("card-content", styles.cardContext)}>
              <h5 className={classNames("card-title", styles.cardTitle)}>
                  Panama Coffee
                </h5>
                <p className={classNames("card-text", styles.cardText)}>
                  Today, Panama has one of the best coffees in the world: its
                  production consistently ranks as the most expensive coffee in
                  global auctions and it is one of the most widely used origins
                  in international coffee competitions.
                </p>
             </div>
               
              </div>
            </div>
           </Link>
          </div>
          <div className={classNames(" col-12 col-md-6 col-lg-4", styles.col)}>
          <Link href="#">
          <div className={classNames("card", styles.card)}>
              <div className={classNames("card-body", styles.cardBody3)}>
              <div className={classNames("card-content", styles.cardContext)}>
              <h5 className={classNames("card-title", styles.cardTitle)}>
                  Brew Guides
                </h5>
                <p className={classNames("card-text", styles.cardText)}>
                  Choose the best grind for your favorite brew method, keep your
                  coffee in a cool dry place and enjoy it while it’s fresh!
                </p>
             </div>
             
              </div>
            </div>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
