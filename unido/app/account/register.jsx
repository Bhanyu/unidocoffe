import styles from "../styles/account.module.scss"

export default function Register({setMainPage}){
    return(
        <div className={styles.registerPart}>
            <h2 className={styles.registerPart__title}>
            SIGN UP
            </h2>
            <div className={styles.registerFormPart}>
                <form className={styles.registerForm}>
                    <input type="text" placeholder="FIRST NAME" />
                    <input type="text" placeholder="LAST NAME" />
                    <input type="email" placeholder="EMAIL" />
                    <input type="password" placeholder="PASSWORD"/>
                    <input type="password" placeholder="CONFIRM PASSWORD" />
                    <input type="date" placeholder="BIRTHDAY"/>
                    <input type="number" placeholder="PHONE NUMBER" />
                   <div className={styles.check}>
                   <input type="checkbox" className={styles.checkBtn2} /><span>Yes, I Accept Terms and conditions</span>
                   </div>
                <button className={styles.signup}type="submit">
                    SIGN UP
                </button>
                </form>
            </div>
            <div className={styles.changeAccount}>
<button onClick={()=>setMainPage("register")}>REGISTER</button>
    <button onClick={()=>setMainPage("login")}>LOGIN</button>
</div>

        </div>
    )
}