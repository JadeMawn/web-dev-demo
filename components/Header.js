import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [bounceEffect, setBounceEffect] = useState(false);  
  
  useEffect(() => {
    // Create bouncing effect every 10 seconds
    const bounceInterval = setInterval(() => {
      setBounceEffect(true);
      setTimeout(() => setBounceEffect(false), 1000);
    }, 10000);
    
    
    return () => {
      clearInterval(bounceInterval);
    };
  }, []);
  
  return (
    <header className={styles.header}>
      <h1 className={bounceEffect ? styles.bounce : ''}>
        <span className={styles.orange}>HTML </span> 
        <span className={styles.blue}>CSS </span> 
        <span className={styles.gray}>& </span> 
        <span className={styles.yellow}>JavaScript </span>
      </h1>
    </header>
  );
} 