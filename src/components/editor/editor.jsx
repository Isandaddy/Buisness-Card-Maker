import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

function Editor({cards, addCard, updateCard, deleteCard}) {
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Maker</h1>
            <ul>
                {
                Object.keys(cards).map(key => (<CardEditForm key={key} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard}/>))
                }
                <CardAddForm onAdd={addCard}/>
            </ul>
        </section>
    );
}

export default Editor;