import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import CodeExample from '../components/CodeExample';
import ResultPreview from '../components/ResultPreview';
import ExplanationSection from '../components/ExplanationSection';
import { examples } from '../data/examples';
import styles from '../styles/Home.module.css';
import FlipCard from '../components/FlipCard';
import Image from 'next/image';

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef({});
  
  // Register section refs for scrolling
  const registerSectionRef = (id, ref) => {
    sectionRefs.current[id] = ref;
  };
  
  // Scroll to a specific section
  const scrollToSection = (id) => {
    setActiveSection(id);
    if (sectionRefs.current[id]) {
      sectionRefs.current[id].scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };
  
  // Set up intersection observer to detect which section is in view
  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '-120px 0px',
      threshold: 0.3
    };
    
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all section elements
    const sections = document.querySelectorAll(`.${styles.exampleSection}`);
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Development Demo</title>
        <meta name="description" content="Learn web development through interactive examples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <div className={styles.instructorIntro}>
            
            <div className={styles.instructorInfo}>
              <h2>Hi, I'm Jade!</h2>
              <p>I am a college student in computer science and mathematics, also studying French and Spanish languages. I have 
                been passionate about technology as early as I can remember and love finding ways to use it to solve real world problems.
                I've been coding for a long time and love helping others discover new ways to use technology!</p>
              <div className={styles.instructorBadges}>
                <span className={styles.instructorBadge}>Computer Science</span>
                <span className={styles.instructorBadge}>Mathematics</span>
                <span className={styles.instructorBadge}>Languages</span>
              </div>


            </div>

            <div className={styles.instructorImageWrapper}>
              <div className={styles.instructorImage}>
                <Image
                  src="/Jade.png"
                  alt="Jade - Web Development Instructor"
                  width={150}
                  height={150}
                  className={styles.instructorPhoto}
                  priority
                />
              </div>
            </div>
          </div>
          
          <div className={styles.instructorIntro}>
          <div className={styles.instructorInfo}>
            <h2>About This Lesson</h2>
            <p>In this course we'll be learning about HTML, CSS, and JavaScript, the building blocks needed for building a website. 
              In this lesson I will give you an introduction to these languages and explain how they are used! Finally we'll look 
              at what you can do with these tools and the types of projects we could build together to practice these skills. </p>
                </div>
              </div>
              <div className={styles.instructorInfo}>
              <h2>Lesson Objectives:</h2>
            <div className={styles.lessonHighlights}>
              <div className={styles.highlight}>
                <div className={styles.highlightText}>
                  <h3>Learn the Basics</h3>
                  <p>Understand how websites are structured</p>
                </div>
              </div>
              <div className={styles.highlight}>
                <div className={styles.highlightText}>
                  <h3>Make It Pretty</h3>
                  <p>Understand how to add colors and styles to your pages</p>
                </div>
              </div>
              <div className={styles.highlight}>
                <div className={styles.highlightText}>
                  <h3>Add Interactivity</h3>
                  <p>Lean how to make your website respond to clicks</p>
                </div>
              </div>
              <div className={styles.highlight}>
                <div className={styles.highlightText}>
                  <h3>Build a Game</h3>
                  <p>See a demo game made using HTML, CSS, and JavaScript</p>
                </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      
      <div className={styles.navSticky}>
        <div className={styles.navigationTabs}>
          {examples.map((example) => (
            <button 
              key={example.id}
              className={`${styles.navButton} ${activeSection === example.id ? styles.active : ''}`}
              onClick={() => scrollToSection(example.id)}
            >
              <span>{example.title.split(':')[1].trim()}</span>
            </button>
          ))}
        </div>
        <div className={styles.progressIndicator}>
          <div className={styles.progressLine}>
            {examples.map((example, index) => (
              <div 
                key={example.id}
                className={`${styles.progressDot} ${activeSection === example.id ? styles.active : ''}`}
                style={{ left: `${index * (100 / (examples.length - 1))}%` }}
                onClick={() => scrollToSection(example.id)}
              >
                <span className={styles.dotNumber}></span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <main className={styles.mainContent}>
        {examples.map((example, index) => (
          <section 
            key={example.id} 
            className={styles.exampleSection}
            id={example.id}
            ref={(el) => registerSectionRef(example.id, el)}
          >
            <div className={styles.sectionHeader}>
              <div className={styles.versionBadge}>Version {index + 1}</div>
              <h2>{example.title.split(':')[1].trim()}</h2>
            </div>
            
            <div className={styles.demoContainer}>
              <FlipCard 
                code={example.code}
                explanation={example.explanation}
                image={
                  example.id === 'version1' ? 'Html.jpg' :
                  example.id === 'version2' ? 'WithCss.jpg' :
                  example.id === 'version3' ? 'WithJS.png' : null
                }
              />
              <div className={styles.resultPreviewContainer}>
                <ResultPreview code={example.code} />
              </div>
            </div>
            
            {index < examples.length - 1 && (
              <div className={styles.continueButton}>
                <button onClick={() => scrollToSection(examples[index + 1].id)}>
                  Continue to {examples[index + 1].title.split(':')[1].trim()} 
                  <span className={styles.arrowDown}>↓</span>
                </button>
              </div>
            )}
          </section>
        ))}
        
        
      </main>

      <section className={styles.projectsSection}>
        <h2 className={styles.projectsTitle}>Cool Projects We Can Build Together!</h2>
        <p className={styles.projectsIntro}>
          Now that we've learned what these languages are used for, let's think of some fun projects to practice using these tools!
        </p>
        
        <div className={styles.projectCards}>
          <div className={styles.projectCard}>
            <div className={styles.projectImageContainer}>
              <div 
                className={styles.projectImagePlaceholder}
                style={{backgroundColor: '#3498db'}}
              >
                <span>
                <h3>Your Own Website</h3></span>
              </div>
            </div>
            <p>Create a personal website all about YOU showing your favorite things, your pets, hobbies, and more!</p>
            <div className={styles.projectBadges}>
            </div>
          </div>
          
          <div className={styles.projectCard}>
            <div className={styles.projectImageContainer}>
              <div 
                className={styles.projectImagePlaceholder}
                style={{backgroundColor: '#e74c3c'}}
              >
                <span>
                <h3>Quiz Game</h3></span>
              </div>
            </div>
            <p>Build a fun quiz game about you or any topic you like and quiz your friends!</p>
            <div className={styles.projectBadges}>
            </div>
          </div>
          
          <div className={styles.projectCard}>
            <div className={styles.projectImageContainer}>
              <div 
                className={styles.projectImagePlaceholder}
                style={{backgroundColor: '#2ecc71'}}
              >
                <span>
                <h3>Digital Storybook</h3></span>
              </div>
            </div>
            <p>Create your own interactive storybook about something that interests you where readers can choose what happens next!</p>
            <div className={styles.projectBadges}>
            </div>
          </div>
          
          <div className={styles.projectCard}>
            <div className={styles.projectImageContainer}>
              <div 
                className={styles.projectImagePlaceholder}
                style={{backgroundColor: '#9b59b6'}}
              >
                <span><h3>Virtual Pet Game</h3></span>
              </div>
            </div>
            
            <p>Build a game where you can take care of a virtual pet that you can feed, play with, and watch grow!</p>
            <div className={styles.projectBadges}>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
          <p>Images Source: <a href="https://www.brickandbatten.com/design-residential-construction/" target="_blank" rel="noopener noreferrer">www.brickandbatten.com</a></p>
        </footer>
    </div>
  );
} 