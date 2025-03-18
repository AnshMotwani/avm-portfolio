import React from "react";
import skills from "../../data/skills.json";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  // Categorizing skills dynamically
  const categories = {
    "Programming Languages": [],
    "Tools & Databases": [],
    "Frontend": [],
    "Cloud": []
  };

  skills.forEach(skill => {
    if (categories[skill.category]) {
      categories[skill.category].push(skill);
    }
  });

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {Object.entries(categories).map(([category, skillsList], index) => (
          <div key={index} className={styles.skillsCategory}>
            <h3 className={styles.categoryTitle}>{category}</h3>
            <div className={
              category === "Programming Languages"
                ? styles.skillsGridTwoColumns
                : category === "Tools & Databases"
                ? styles.skillsGridTwoColumns
                : styles.skillsGridVertical
            }>
              {skillsList.map((skill, id) => (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
