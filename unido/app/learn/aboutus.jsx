import React from 'react';


import aboutus1 from "../../public/aboutus1.jpg";
import about3 from "../../public/about3.jpg";
import about2 from "../../public/about2.jpeg";
import about4 from "../../public/about4.jpg";
import styles from "../styles/aboutus.module.scss"
import Image from "next/image";


export default function AboutUs({ setCurrentPage }) {

  return (
    <section id={styles.aboutUs}>
      <div className={styles.container}>
        <div className={styles.pageTitle}>
          <h1>About Us</h1>
        </div>
        <div className={styles.aboutUsContent}>
          <h2>ABOUT US</h2>
          <p>
            Panama had one of the best coffees in the world and no place to
            drink it locally. Inspired by this premise, the first Café Unido
            opens its doors in 2014 in the city of Panama with a clear goal:
            provide a space for Panamanians to learn and appreciate coffee grown
            by different local producers, their distinct terroirs, regions,
            micro lots, varietals and processes while at the same time giving
            back to coffee growing regions. Over the years we evolved from a
            single shop, to nine stores, seven in Panama City, one in Boquete,
            Panama’s Coffee mecca, and a new store in Washington DC.
          </p>
          <h2>SOURCING</h2>
          <p>
            During the past 7 years, the Unido team has explored multiple farms
            in the Panamanian highlands in search of quality coffee, and we have
            developed strong relationships with many producers we now consider
            our friends. <br /><br /> These friendships have blossomed and have given
            us special access to winning lots and micro lots and given us the
            ability to collaborate in designing our own lots with different
            farms, combining a series of different picking and drying techniques
          </p>
          <Image className={styles.contentImg}
            src={aboutus1}
            width={500}
            height={500}
            alt={"photo credits: Jorge Isaac"}
          />
          <h2>ROASTING</h2>
          <p>
            Just like a master chef working with high quality, locally sourced
            ingredients, can create a magical dish, the roasting process allows
            a coffee to tell a story, We provide great care in roasting all our
            green beans, and our mission is to potentiate and unmask all
            possible flavors hidden in each lot we buy, to be as transparent as
            possible in the entire roasting process and allowing each cup of
            coffee to show off its distinct terroir and the passion each farm
            put into its growth, process and drying technique.
          </p>
          <Image className={styles.contentImg} src={about2} width={500} height={500} />
          <h2>BARISTAS</h2>
          <p>
            Even though each step in the chain is extremely important in a
            coffee’s true potential, even if each coffee has been carefully
            selected, cupped and roasted with the upmost care, we at Unido know
            the final magic lies in the hands of our baristas.
          </p>
          <Image className={styles.contentImg} src={about3} width={500} height={500} />
          <h2>FOOD MENU</h2>
          <p>
            With the help of our partner and chef, and San Pellegrino Latam 50
            Best alumni, Mario Castrellón, we created a fun menu that
            complements our beverage program, with standout dishes like our
            delicious Unido burger, trademark waissant, savory breakfast
            sandwich and many more
          </p>
          <Image className={styles.contentImg} src={about4} width={500} height={500} />
          <h2>FUTURE</h2>
          <p>
            With the investment by Grupo Eleta in Café Unido and led by
            Guillermo Saint Malo, a Panamanian business leader, entrepreneur and
            part of the third generation of Eleta family; Cafe Unido starts its
            expansion to other markets taking the best panamenian coffees to the
            US, focused initially in Washington DC and then on to other cities
            in the world with opportunities thru our franchise program and in
            hand with the best coffees in the world.
          </p>
        </div>
        <div className={styles.otherPagesLinks}>
        <ul>
        <li><button onClick={() => setCurrentPage('brewguides')}>Brew Guides</button></li>
        <li><button onClick={() => setCurrentPage('work')}>Work at Unido</button></li>
        <li><button onClick={() => setCurrentPage('social')}>Social Impact</button></li>
      </ul>
        </div>
      </div>
      <hr />
    </section>
  );
}
