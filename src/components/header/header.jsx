import React from 'react';
import styles from './header.module.css';

const Header = (props) => {
    
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="./images/logo.png" alt="logo"/>
            </div>
            <h1>Buisness Card Maker</h1>
        </header>
    )
};

export default Header;