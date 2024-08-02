"use client"

import styles from "../styles/locations.module.scss"
import PanamaLocations from "./panamaloc"

import { useState } from "react"
import UsaLocation from "./usa"


export default function Locations(){
const [justLocation, setJustLocation] = useState("usa");

const renderLocPage2 = ()=>{
    switch (justLocation) {
        case "usa":
            return <UsaLocation setJustLocation={setJustLocation}/>
            break;
        case "panama":
            return <PanamaLocations setJustLocation={setJustLocation}/>
            break;
    
        default:
            return <UsaLocation setJustLocation={setJustLocation}/>
            break;
    }

}



    return(
        <section id={styles.locations}>
            <h1>Locations</h1>
            <div className={styles.locations__container}>
                {renderLocPage2()}
            </div>
        </section>
    )
}