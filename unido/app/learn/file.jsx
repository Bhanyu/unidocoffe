import React, { useState } from "react"

import styles from "../styles/file.module.scss"


export default function FileUpDate(){
    const [selectedFile, setSelectedFile] = useState(null)
    const handleFileChange = (event)=>{
const file = event.target.files[0];
if (file) {
    setSelectedFile(file);

}
    }
    return(
        <div className={styles.fileInput}>
        <input type="file" className={styles.file}
        onChange={handleFileChange}
        accept=".pdf, .doc, .docx, .txt"
        
        />

        </div>
    )
}