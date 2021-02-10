import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from "react-router-dom";
import styles from './main.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import userEvent from '@testing-library/user-event';

//cardがupdateになる旅にcardRepositoryを使用
//user IDを識別子として使用
const Main = ({ FileInput, authService, cardRepository }) => {
  const historyState = useHistory().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] =useState(historyState && historyState.id);

    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    }

    useEffect(() => {
        authService.onAuthChange((user) => {
        if(user) {
            setUserId(user.uid);
        }
        else {
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

      cardRepository.saveCard(userId, card);
    };
    const deleteCard = (card) => {
      setCards(cards => {
        const updated = {...cards};
        delete updated[card.id];
        return updated;
      });

      cardRepository.removeCard(userId, card);
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