import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm <span className={styles.name}>Ansh</span></h1>
        <h2 className={styles.typingText}>
          An aspiring{" "}
          <span className={styles.typedText}>
            <Typewriter
              words={[
                "Data Scientist",
                "Data Engineer",
                "Data Analyst",
                "AI Engineer",
                "Software Developer"
              ]}
              loop={0}  // 0 means infinite loop
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <p className={styles.description}></p>
        <div className={styles.buttonContainer}>
          <a href="mailto:ansh.motwani.2@gmail.com" className={styles.contactBtn}>Contact Me</a>
          <a href="https://drive.google.com/file/d/1j7SLGwSpHC48weDRbPNjn4Wbu7fGjMmS/view?usp=sharing" target = '_blank' rel="noopener noreferrer" className={styles.resumeBtn}>Resume</a>
        </div>
      </div>
      <img src={getImageUrl('hero/heroImage.png')} alt='Hero Image of Me' className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
