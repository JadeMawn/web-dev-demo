import { useState, useRef } from 'react';
import styles from '../styles/CodeExample.module.css';

export default function CodeExample({ code }) {
  const [isCopied, setIsCopied] = useState(false);
  const codeRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    });
  };

  return (
    <div className={styles.codeSection}>
      <h3>Code</h3>
      <button 
        className={styles.copyButton} 
        onClick={handleCopy}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
      <pre className={styles.codeBlock}>
        <code ref={codeRef}>{code}</code>
      </pre>
    </div>
  );
} 