import styles from "../styles/account.module.scss"

export default function Login({setMainPage}){
    return(
        <div className={styles.registerPart}>
            <h2 className={styles.registerPart__title}>
            SIGN IN
            </h2>
            <div className={styles.registerFormPart}>
                <form className={styles.registerForm}>
                 
                    <input type="email" placeholder="EMAIL" />
                    <input type="password" placeholder="PASSWORD"/>
                   
                    <button className={styles.signup} type="submit">
                    SIGN IN
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