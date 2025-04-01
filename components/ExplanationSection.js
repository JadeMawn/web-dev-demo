import { useState } from 'react';
import styles from '../styles/ExplanationSection.module.css';
import Image from 'next/image';

const simplifyText = (text) => {
  // Simple function to make text more kid-friendly
  return text; // For now, just return the original text
};

export default function ExplanationSection({ explanation, isKidFriendly = true }) {
  const [showTip, setShowTip] = useState(false);
  
  // Kid-friendly explanations that simplify the concepts
  const kidFriendlyContent = {
    "What's Happening Here?": "Check it out! This is just a simple webpage with some text and a button.",
    "We've added CSS to style our webpage:": "Now we're adding some colors and cool designs to make our page look awesome!",
    "We've now added JavaScript to make our webpage interactive:": "Magic time! JavaScript lets us make things happen when you click buttons!",
    "This is a complete Tic Tac Toe game that demonstrates several important JavaScript concepts:": "Let's make a real game! This Tic Tac Toe game lets you and a friend play together."
  };
  
  // Kid-friendly tips
  const funTips = {
    "What's Happening Here?": "Did you know? Web pages are like digital LEGO® - you build them piece by piece!",
    "We've added CSS to style our webpage:": "Colors and styles make websites fun! What colors would YOU choose?",
    "We've now added JavaScript to make our webpage interactive:": "JavaScript is like giving your webpage superpowers!",
    "This is a complete Tic Tac Toe game that demonstrates several important JavaScript concepts:": "Try changing the X and O to other emojis like 🦄 and 🦖!"
  };
  
  // Map version IDs to their corresponding images
  const versionImages = {
    "This is a basic HTML webpage that consists of:": "Html.jpg",
    "We've added CSS to style our webpage:": "WithCss.jpg",
    "We've now added JavaScript to make our webpage interactive:": "WithJS.png"
  };
  
  // Get kid-friendly content if available
  const content = isKidFriendly && kidFriendlyContent[explanation.content] 
    ? kidFriendlyContent[explanation.content] 
    : explanation.content;
    
  const tip = funTips[explanation.content] || "Tip: Keep practicing and you'll be a coding superstar!";
  
  const conclusion = explanation.conclusion || "";
  
  if (process.env.NODE_ENV !== 'production') {
    console.log('Current content:', explanation.content);
    console.log('Available images:', Object.keys(versionImages));
    console.log('Matching image:', versionImages[explanation.content]);
  }
  
  return (
    <div className={styles.explanation}>
      <h3 className={styles.kidTitle}>{explanation.title}</h3>
      <p className={styles.kidContent}>{content}</p>
      
      {/* Add image if available for this version */}
      {versionImages[explanation.content] && (
        <div className={styles.imageContainer}>
          <Image
            src={versionImages[explanation.content]}
            alt={`Example of ${explanation.title}`}
            width={800}
            height={400}
            className={styles.explanationImage}
            priority
          />
        </div>
      )}

  <p className={styles.kidContent}>{conclusion}</p>
      
      <div className={styles.pointsContainer}>
        {explanation.points.map((point, index) => (
          <div key={index} className={styles.kidPoint}>
            <div className={styles.pointNumber}>{index + 1}</div>
            <p>{isKidFriendly ? simplifyText(point) : point}</p>
          </div>
        ))}
      </div>
      
      <p className={styles.conclusion}>{isKidFriendly ? simplifyText(explanation.conclusion) : explanation.conclusion}</p>
      
      <button 
        className={styles.tipButton} 
        onClick={() => setShowTip(!showTip)}
      >
        {showTip ? 'Hide Tip' : 'Show Fun Tip!'}
      </button>
      
      {showTip && (
        <div className={styles.tipBox}>
          {tip}
        </div>
      )}
      
      <Image
        src="/Html.jpg"
        alt="Test image"
        width={800}
        height={400}
        priority
      />
    </div>
  );
} 