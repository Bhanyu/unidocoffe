import styles from "../styles/panamaLoc.module.scss"
import cardImg1 from "../../public/swiperimg2.png"
import cardImg2 from "../../public/swiperimg3.jpg"
import cardImg3 from "../../public/swiperimg4.jpg"
import cardImg4 from "../../public/swiperimg1.jpg";
import cardImg5 from "../../public/swiperimg6.png"
import cardImg6 from "../../public/swiperimg7.jpg"
import Image from "next/image"

const PanamaLocations = ({setJustLocation})=>{

const locations = [
    {
        id:1,
        name:"Location 1",
        description:"Coco del Mar",
        image:cardImg1,

    },
    {
        id:2,
        name:"Location 2",
        description:"Coco del Mar",
        image:cardImg2,
    },
    {
        id:3,
        name:"Location 3",
        description:"Coco del Mar",
        image:cardImg3,

    },
    {
        id:4,
        name:"Location 4",
        description:"Coco del Mar",
        image:cardImg4,
    },
    {
        id:5,
        name:"Location 5",
        description:"Coco del Mar",
        image:cardImg5,


    },
    {
        id:6,
        name:"Location 6",
        description:"Coco del Mar",
        image:cardImg6,
    }
]


    return(
        <div className={styles.panamCardsLoc}>
             <div className={styles.panamaCards}>
   {
    locations && locations.map((panamaLoc)=>{
        return(
            <div key={panamaLoc.id} className={styles.panamaLoc_card}>
            <Image
            className={styles.panamaImg}
            src={panamaLoc.image}
            width={300}
            height={300}
            
            />
               <h3>{panamaLoc.name}</h3>
               <p>{panamaLoc.description}</p>
           </div>
        )
    })
   }

   
        </div>
        <div className={styles.changeLoc}>
<button onClick={()=>setJustLocation("usa")}>USA</button>
    <button onClick={()=>setJustLocation("panama")}>PANAMA</button>
</div>
        </div>
       
    )
}
export default PanamaLocations