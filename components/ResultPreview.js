import styles from '../styles/ResultPreview.module.css';

export default function ResultPreview({ code }) {
  return (
    <div className={styles.resultSection}>
      <div className={styles.previewHeader}>
        <h3>Result</h3>
        <div className={styles.browserControls}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>
      <iframe 
        className={styles.resultContent}
        srcDoc={code}
        title="Result Preview"
        sandbox="allow-scripts"
      />
    </div>
  );
} 