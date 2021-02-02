import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from "react-router-dom";
import styles from './main.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Main = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'cho',
      company: 'adecco',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'jjj@gmail.com',
      message: 'go go go',
      fileName: 'cho',
      fileURL: null
    },
    {
      id: 2,
      name: 'kim',
      company: 'adecco',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'sssj@gmail.com',
      message: 'go go go',
      fileName: 'kim',
      fileURL: 'kim.png'
    },
    {
      id: 3,
      name: 'lill',
      company: 'adecco',
      theme: 'light',
      title: 'Software Engineer',
      email: 'jcoco@gmail.com',
      message: 'go go go',
      fileName: 'lill',
      fileURL: 'lill.png'
    },
  ]);
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
            <Editor cards={cards}/>
            <Preview cards={cards}/>    
          </div>    
        <Footer className={styles.footer}/>
      </section>
    );
}

export default Main;