import React from 'react';
import styles from './login.module.css';

function Login(props) {

    return (
        <article className={styles.login}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src="./images/logo.png" alt="logo"/>
                </div>
                <h1>Buisness Card Maker</h1>
            </header>
            <div className={styles.middle}>
                <h1 className={styles.middleTitle}>Login</h1>
            </div>
            <footer className={styles.footer}>Code Your Dream</footer>
        </article>
    );
}

export default Login;