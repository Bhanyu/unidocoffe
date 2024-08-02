"use client"
import { useState } from "react"
import styles from "../styles/account.module.scss"
import Register from "./register"
import Login from "./login"
export default function Account(){

    const [mainPage , setMainPage] = useState("register")

   const renderAccount = ()=>{
    switch (mainPage) {
        case "register":
            return <Register setMainPage={setMainPage}/>
            break;

    case "login":
        return <Login setMainPage={setMainPage} />
break;
        default:
            return <Register setMainPage={setMainPage}/>
            break;
    }
   }



    return(
        <section id={styles.account}>
            <div className={styles.container}>
             {renderAccount()}
            </div>
        </section>
    )
}