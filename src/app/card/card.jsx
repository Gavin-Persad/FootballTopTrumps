import styles from './card.module.css';
import react from 'react';

export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.title}>Football</div>
            <div className={styles.description}>A football</div>
        </div>
    );
}