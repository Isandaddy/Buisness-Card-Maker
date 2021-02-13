import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(() => {
    return (
        <div className={styles.footer}>
            Code Your Dreams
        </div>
    );
});

export default Footer;