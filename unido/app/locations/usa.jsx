import styles from "../styles/locations.module.scss"
import cardImg1 from "../../public/swiperimg2.png"
import cardImg2 from "../../public/swiperimg6.png"
import Image from "next/image"
export default function UsaLocation({ setJustLocation }){
    return(
    
      <div className={styles.usaCardsContainer}>
        <div className={styles.location_cards}>
    <div className={styles.location_card}>
     <Image className={styles.usaImg}
     src={cardImg1}
     width={300}
     height={300}
     
     />
        <h3>La Cosecha</h3>
        <p>La Cosecha Union Market District
1280 4th St NE, Washington, DC 20002, USA
Monday to Sunday 7am - 7pm</p>
    </div>
    <div className={styles.location_card}>
    <Image className={styles.usaImg}
     src={cardImg2}
     width={300}
     height={300}
     
     />
        <h3>Shaw</h3>
        <p>908 W St NW, Washington, DC 20001, USA
Monday to Friday 7am - 5pm
Saturdays and Sundays 8am - 5pm</p>
    </div>
</div>
<div className={styles.changeLoc}>
<button onClick={()=>setJustLocation("usa")}>USA</button>
    <button onClick={()=>setJustLocation("panama")}>PANAMA</button>
</div>
      </div>      

           
     
    )
}
