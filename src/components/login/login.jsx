import React from 'react';
import styles from './login.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import {
    Link
  } from "react-router-dom";


function Login({ authService }) {

    const onLogin = (event) => {
        authService//
        .login(event.currentTarget.textContent)//
        .then(console.log);
    }

    return (
        <section className={styles.login}>
            <Header/>
            <section className={styles.middle}>
                <h1 className={styles.middleTitle}>Login</h1>
                <ul>
                    <li>
                        <Link to='/app'>
                            <button onClick={ onLogin }>Google</button>
                        </Link>
                    </li>
                    <li>
                        <button onClick={ onLogin }>Github</button>
                    </li>
                </ul>
            </section>
            <Footer/>
        </section>
    );
}

export default Login;