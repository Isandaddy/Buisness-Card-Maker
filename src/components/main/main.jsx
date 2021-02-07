import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from "react-router-dom";
import styles from './main.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Main = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    '1' : {
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
    '2' : {
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
    '3' : {
      id: 3,
      name: 'lill',
      company: 'adecco',
      theme: 'light',
      title: 'Software Engineer',
      email: 'jcoco@gmail.com',
      message: 'go go go',
      fizleName: 'lill',
      fileURL: 'lill.png'
    },
  }
  );

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

    const createOrUpdateCard = (card) => {
      
      setCards(cards => {
        const updated = {...cards};
        updated[card.id] = card;
        return updated;
      });
    };
    const deleteCard = (card) => {
      setCards(cards => {
        const updated = {...cards};
        delete updated[card.id];
        return updated;
      });
    };

    return (
      <section className={styles.main}>
        <Header className={styles.header} onLogout={onLogout}/>
          <div className={styles.mainContain}>
            <Editor FileInput={ FileInput } cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard}/>
            <Preview cards={cards}/>    
          </div>    
        <Footer className={styles.footer}/>
      </section>
    );
}

export default Main;