import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/FlipCard.module.css';

export default function FlipCard({ code, explanation, image }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={styles.flipCardContainer}>
      <div 
        className={`${styles.flipCard} ${isFlipped ? styles.flipped : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={styles.flipCardFront}>
          <div className={styles.codeSection}>
            <h3>Code</h3>
            <pre className={styles.codeBlock}>
              <code>{code}</code>
            </pre>
          </div>
        </div>
        <div className={styles.flipCardBack}>
          <div className={styles.explanationSection}>
            <h3>{explanation.title}</h3>
            <p className={styles.content}>{explanation.content}</p>
            
            
            
            <div className={styles.points}>
              {explanation.points.map((point, index) => (
                <p key={index} className={styles.paragraph}>
                  {point}
                </p>
              ))}
            </div>

            {image && (
              <div className={styles.imageContainer}>
                <Image
                  src={`/${image}`}
                  alt={`Example of ${explanation.title}`}
                  width={800}
                  height={400}
                  className={styles.explanationImage}
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 