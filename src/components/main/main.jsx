import React, { useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from "react-router-dom";
import styles from './main.module.css';

const Main = ({ authService }) => {
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    }

    useEffect(() => {
        authService.onAuthChange((user) => {
        if(!user) {
            history.push('/')
        }
        });
    });

    return (
      <section className={styles.main}>
        <Header onLogout={onLogout}/>
          <section>
            contents    
          </section>    
        <Footer/>
      </section>
    );
}

export default Main;