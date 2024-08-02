"use client"
import classNames from "classnames"
import styles from "../../styles/shop.module.scss"
import bottomAngle from "../../../public/chevron-bottom.svg"
import search from "../../../public/search-svgrepo-com.svg"

import Image from "next/image"
import Link from "next/link"
import ShopProductCard from "../../components/shopProductPage"
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react"
export default function ShopContent({products}){

   const [searchTerm , setSearchTerm]= useState("");
   const [filteredCards , setFilteredCards] = useState(products)



const [isOpen1, setIsOpen1] = useState(false);
const [isOpen2, setIsOpen2] = useState(false);
const [isOpen3, setIsOpen3] = useState(false);
   useEffect(()=>{
    if (searchTerm.trim() === "") {
        setFilteredCards(products);
      } else {
        setFilteredCards(
          products.filter((product) =>
            product.desc && product.desc.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }
   },[searchTerm, products])


const handleClick = (event)=>{
    setSearchTerm(event.target.value)
}


const toggleDropdown1 = ()=>{
    setIsOpen1(!isOpen1)
    setIsOpen2(false)
    setIsOpen3(false)
}
const toggleDropdown2 = ()=>{
    setIsOpen2(!isOpen2)
    setIsOpen1(false)
    setIsOpen3(false)

}
const toggleDropdown3 = ()=>{
    setIsOpen3(!isOpen3)
    setIsOpen1(false)
    setIsOpen2(false)
}




return(
        <section id={styles.shopping}>
            <div className={classNames("container", styles.shopContainer)}>
<div className={classNames("row", styles.shopRow)}>
    <div className={classNames("col-12","col-lg-3", styles.shopCol)}>
     <div className={ styles.shopTitle}>Now Shopping by</div>

     <div className={ styles.categories}>
     <div className={classNames("character", styles.shopChar)}>
           
                <button className={styles.charButton}
                onClick={toggleDropdown1}
                
                >
                    Process{" "}
                     <Image className={styles.bottom_angle} src={bottomAngle} 
                    width={20}
                    height={15}/>
                </button>
                
                <div className={classNames (styles.shopDropdown,{
                    [styles.shopDropdownOpen]: isOpen1
                })}
                  
                >
                    <ul className={styles.dropdownList}>
                        <li><Link className={styles.underLink} href="#">NATURAL</Link></li>
                        <li><Link className={styles.underLink}href="#">EXPERIMENTAL</Link></li>
                        <li><Link className={styles.underLink}href="#">DECAF</Link></li>
                    </ul>
                </div>
          
        </div>



        <div className={classNames("character", styles.shopChar)}>
           
           <button className={styles.charButton}
           onClick={toggleDropdown2}
           >
               Type {" "}
                <Image className={styles.bottom_angle} src={bottomAngle}
               width={20}
               height={15}/>
           </button>
           <div className={classNames( styles.shopDropdown,{
            [styles.shopDropdownOpen]: isOpen2
           })}>
                    <ul className={styles.dropdownList}>
                        <li><Link className={styles.underLink} href="#">NATURAL</Link></li>
                        <li><Link  className={styles.underLink} href="#">EXPERIMENTAL</Link></li>
                        <li><Link className={styles.underLink} href="#">DECAF</Link></li>
                    </ul>
                </div>
          
     
   </div>



   <div className={classNames("character", styles.shopChar)}>
           
           <button className={styles.charButton}
           onClick={toggleDropdown3}>
               Geisha {" "}
                <Image className={styles.bottom_angle} src={bottomAngle}
               width={20}
               height={15}/>
           </button>
           <div className={classNames(styles.shopDropdown,{
            [styles.shopDropdownOpen]: isOpen3
           })}>
                    <ul className={styles.dropdownList}>
                        <li><Link className={styles.underLink} href="#">NATURAL</Link></li>
                        <li><Link className={styles.underLink} href="#">EXPERIMENTAL</Link></li>
                        <li><Link className={styles.underLink} href="#">DECAF</Link></li>
                    </ul>
                </div>
          
     
   </div>
     </div>
    </div>
    <div className={classNames("col-12","col-lg-9", styles.shopCol2)}>
       <div className={classNames("col-12" , styles.shopSearchBar)}>
      
            <div className={styles.searchBar}>
              <Image className={styles.searchIcon}
              src={search}
              width={25}
              height={25}/>  <input className={styles.searchInput}
               type="text" placeholder="Search..."
             value={searchTerm}
             onChange={handleClick}
               />
            </div>
     
       </div>
       <div className={classNames("col-12", styles.shopInnerCards)}>
       <div className={classNames("row", styles.shopCards)}>
        {filteredCards.map((card)=>{
            return(
             
                <div key={card.id} className={classNames("col-6","col-lg-4", styles.singleCard)}>
                        <ShopProductCard shopProduct={card} />
                </div>
                  
            )
        })}
       </div>
       </div>
      
    </div>
</div>
            </div>
        </section>
    )
}