"use client"

import { useState } from 'react';
import Link from "next/link"
import Image from "next/image"
import styles from "../Header/header.module.scss"
import logo from "../../../public/logo.png"
import bucketb from "../../../public/bucketb.png"
import buckety from "../../../public/buckety.png"
import burger from "../../../public/burger.svg"

const Header = ()=>{
const navlinks = [
    {name: "SHOP",href:"http://localhost:3000/shop"},
    {name: "MENU",href:"http://localhost:3000/menu"},
    {name: "LEARN",href:"http://localhost:3000/learn"},
    {name: "PANAMA COFFEE",href:"https://nextjs.org/"},
   
    {name: "LOCATIONS",href:"http://localhost:3000/locations"},
    {name: "WHOLESALE",href:"https://nextjs.org/"},
    {name: "ACCOUNT",href:"http://localhost:3000/account"},
]
const [isOpen, setIsOpen] = useState(false)

const toggleMenu = ()=>{
setIsOpen(!isOpen)

}
    return(
        <header id={styles.head}>
            <div className={styles.container}>
                <div className={styles.head_part}>
                    <div className={styles.logo}>
                        <Link href={"http://localhost:3000/"} className={styles.logolink}>
                        <Image className={styles.unidologo}
                        src={logo}
                        width={159}
                        height={64}
                        />
                        </Link>
                    </div>
                    <div className={styles.navbar}>
                        <nav>
{navlinks && navlinks.map((navlink)=>{
    return(
        <Link className={styles.navlink} href={navlink.href} key={navlink.name}>{navlink.name}</Link>
    )
})}
                        </nav>
                        <div className={styles.bucket}>
                            <Link className={styles.bucket_count} href={"http://localhost:3000/basket"}>
                            <Image className={styles.show}
                            src={bucketb}
                            width={20}
                            height={20}
                            />
                               <Image className={styles.hidden}
                            src={buckety}
                            width={20}
                            height={20}
                            />
                            </Link>
                        </div>
                     
                    </div>
                    <div className={styles.burgermenu}>
                            <button className={styles.burgerIcon} onClick={toggleMenu}>
                                <Image 
                                src={burger}/>
                            </button>
                         
                        </div>
                </div>
            </div>
          
                       
                       
                            <div className= {`${styles.containermenu} ${isOpen ? styles.show : " " }`}>
                            <div className={styles.mobil_menu}>
                                {
                                    navlinks && navlinks.map((mobilink)=>{
                                        return(
                                            <Link href={mobilink.href} key={mobilink.name} className={styles.mobilink}>
                                                {mobilink.name}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        
                       
        </header>
        
    )
}
export default  Header;