import React from "react";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {/* Skills Grid Section */}
        <div className={styles.skillsGrid}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        {/* Work Experience Section */}
        <ul className={styles.history}>
          {history.map((historyItem, index) => (
            <li key={index} className={styles.historyItem}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{historyItem.organisation}</h3>
                {historyItem.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className={styles.roleDetails}>
                    <h4>{role.role}</h4>
                    <p>{`${role.startDate} - ${role.endDate}`}</p>
                    <ul>
                      {role.experiences.map((experience, expIndex) => (
                        <li key={expIndex}>{experience}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
