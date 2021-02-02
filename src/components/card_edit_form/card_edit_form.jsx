import React from 'react';
import styles from './card_edit_form.module.css';

const CardEditForm = ({card}) => {
    return (
        <article className={styles.editor}>
            <h2>{card.id}</h2>
        </article>
);
}

export default CardEditForm;