import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

function Editor({cards}) {
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Maker</h1>
            <ul>
                {
                cards.map(card => (<CardEditForm card={card}/>))
                }
            </ul>
        </section>
    );
}

export default Editor;