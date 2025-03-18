import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  // Timeline Data (Reversed Order)
  const timelineData = [
    { year: "2025", events: [{ title: "MS CS (Big Data Systems)", institution: "Arizona State University", date: "January 2024 - December 2025", logo: "about/asuLogo.png" }] },
    { year: "2023", events: [{ title: "Member of Technical Staff", institution: "Capgemini", date: "January 2023 - July 2023", logo: "history/capgemini.png" }] },
    { year: "2021", events: [{ title: "Senior Analyst / Developer", institution: "Capgemini", date: "October 2021 - December 2022", logo: "history/capgemini.png" }] },
    { year: "2020", events: [{ title: "Analyst / Developer", institution: "Capgemini", date: "August 2020 - September 2021", logo: "history/capgemini.png" }] },
    { year: "2016", events: [{ title: "B.Tech IT", institution: "SRM University", date: "July 2016 - May 2020", logo: "about/srmLogo.png" }] },
  ];

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.aboutContent}>
        {/* Left: Timeline */}
        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine}></div> {/* Vertical Line */}
          {timelineData.map((yearData, index) => (
            <div key={index} className={styles.yearBlock}>
              <div className={styles.year}>{yearData.year}</div>
              <div className={styles.events}>
                {yearData.events.map((event, idx) => (
                  <div key={idx} className={styles.eventCard}>
                    <img src={getImageUrl(event.logo)} alt={`${event.institution} Logo`} className={`${styles.eventLogo} ${event.title.includes("ASU") ? styles.fullLogo : ""}`} />
                    <div className={styles.eventDetails}>
                      <h3>{event.title}</h3>
                      <p>{event.institution}</p>
                      <span className={styles.eventDate}>{event.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right: About Me */}
        <div className={styles.aboutMe}>
          <p>
            I'm a graduate student at Arizona State University (MS in Computer Science - Big Data Systems) with a strong background in data engineering, analytics, and distributed systems.
            With three years of industry experience, I’ve built scalable data pipelines, optimized databases, and designed architectures. I specialize in ETL workflows, real-time data streaming, and big data processing to drive insights and decision-making.
            Passionate about turning data into impact, I thrive on solving complex data challenges using big data frameworks, ML models, and cloud technologies.
          </p>
        </div>
      </div>
    </section>
  );
};
