import React, { useEffect, useState } from 'react';
import styles from './login.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import {
    Link, useHistory
  } from "react-router-dom";


function Login({ authService }) {
    //useHistoryを使用で違う画面に移動
    const history = useHistory();
    //loginができたらMain画面に移動
    const gotoMain = (userId) => {
        history.push({
            pathname: '/main',
            state: { id: userId },
        });
    };
    const onLogin = (event) => {
        authService//
        .login(event.currentTarget.textContent)//
        .then(data => {
            gotoMain(data.user.uid);
        });
    }

    useEffect(()=>{
        authService.onAuthChange(user => {
            user && gotoMain(user.uid)
        });
    }, []);

    return (
        <section className={styles.login}>
            <Header/>
            <section className={styles.middle}>
                <h1 className={styles.middleTitle}>Login</h1>
                <ul>
                    <li>
                        <Link to='/app'>
                            <button className={styles.loginButton} onClick={ onLogin }>Google</button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/app'>
                            <button className={styles.loginButton} onClick={ onLogin }>Github</button>
                        </Link>
                    </li>
                </ul>
            </section>
            <Footer/>
        </section>
    );
}

export default Login;