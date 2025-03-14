import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
const aboutImage = getImageUrl("about/aboutImage.png");
console.log("About Image:", aboutImage);
export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>Education</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="Image Description" />            
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src ={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" className={styles.aboutImage}/>
                    <div className={styles.aboutItemText}>
                        <h3>Arizona State University</h3>
                        <p>MS CS ( Big Data Systems )</p>
                        <p>Graduation: December 2025</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src ={getImageUrl("about/serverIcon.png")} alt="Server Icon" className={styles.aboutImage}/>
                    <div className={styles.aboutItemText}> 
                        <h3>SRM university</h3>
                        <p>B.Tech Inforamtion Technology</p>
                        <p>Graduation: May 2020</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
};
