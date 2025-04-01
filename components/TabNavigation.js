import styles from '../styles/TabNavigation.module.css';

export default function TabNavigation({ examples, activeTab, setActiveTab }) {
  const emojis = {
    'version1': '📄',
    'version2': '🎨',
    'version3': '⚡',
    'version4': '🎮'
  };
  
  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        {examples.map((example) => (
          <div
            key={example.id}
            className={`${styles.tab} ${activeTab === example.id ? styles.active : ''}`}
            onClick={() => setActiveTab(example.id)}
          >
            <span className={styles.emoji}>{emojis[example.id]}</span>
            {example.title}
          </div>
        ))}
      </div>
      <div className={styles.progressBar}>
        <div 
          className={styles.progress} 
          style={{ 
            width: `${(parseInt(activeTab.replace('version', '')) / examples.length) * 100}%` 
          }}
        ></div>
      </div>
    </div>
  );
} 