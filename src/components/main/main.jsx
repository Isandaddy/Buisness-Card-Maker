import React, { useCallback, useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from "react-router-dom";
import styles from './main.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

//cardがupdateになる旅にcardRepositoryを使用
//user IDを識別子として使用
const Main = ({ FileInput, authService, cardRepository }) => {
  const historyState = useHistory().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] =useState(historyState && historyState.id);

    const history = useHistory();
    const onLogout = useCallback(() => {
      authService.logout();
  },[authService]);

    //login関連
    useEffect(() => {
        authService.onAuthChange((user) => {
        if(user) {
            setUserId(user.uid);
        }
        else {
          history.push('/')
        }
        });
    }, [authService, history]);

    //がマウントされた時、利用者の ID が変形された時
    useEffect(() => {
      if(!userId){
        return;
      }
      const stopSync = cardRepository.syncCards(userId, (cards) => {
        setCards(cards);
      })
      //unmount（componentがもう見えない時）された時
      return () => stopSync();    
    },[userId, cardRepository])

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