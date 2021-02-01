import React, { useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from "react-router-dom";
import styles from './main.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

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
        <Header className={styles.header} onLogout={onLogout}/>
          <div className={styles.mainContain}>
            <Editor />
            <Preview />    
          </div>    
        <Footer className={styles.footer}/>
      </section>
    );
}

export default Main;