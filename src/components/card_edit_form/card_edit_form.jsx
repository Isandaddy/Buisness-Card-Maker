import React, { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/imageFileInput';
import styles from './card_edit_form.module.css';

const CardEditForm = ({FileInput, card, updateCard, deleteCard}) => {
    const {name, company, title, email, message, theme, fileName, fileURL} = card;
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    
    const onSubmit = () => {
        deleteCard(card);
    }
    const onChange = (event) => {
        
        if(event.currentTarget == null){
            return;
        }
        event.preventDefault();
        updateCard({
            ...card,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    }

    return (
        <form className={styles.form}>
            <input ref={nameRef} className={styles.input} type="text" name='name' value={name} onChange={onChange}/>
            <input ref={companyRef} className={styles.input} type="text" name='company' value={company} onChange={onChange}/>
            <select ref={themeRef} className={styles.select} name="theme" value={theme} onChange={onChange}>
                <option value='light'>light</option>
                <option value='dark'>dark</option>
                <option value='colorful'>colorful</option>
            </select>
            <input ref={titleRef} className={styles.input} type="text" name='title' value={title} onChange={onChange}/>
            <input ref={emailRef} className={styles.input} type="text" name='email' value={email} onChange={onChange}/>
            <textarea ref={messageRef} className={styles.textarea} name="message" value={message} onChange={onChange}></textarea>
            <div className={styles.fileInput}>
                <FileInput />
            </div>
            <Button className={styles.button} name='Delete' onClick={onSubmit}/>
        </form>
);
}

export default CardEditForm;