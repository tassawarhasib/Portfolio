import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils"

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I'm Tassawar Hasib
                </h1>
                <p className={styles.description}>
                    I'm a Software Developer (Frontend) with 6 months of experience using Reactjs. Reach out if you'd like to Know more!
                </p>
                <div className={styles.heroBtnSection}>
                    <a href="mailto:tassawarhasib@gmail.com" className={styles.contactBtn}>
                        Contact Me
                    </a>
                    <a href="https://drive.google.com/file/d/15MF8Svfx9nFk0bjqU2Ud9FoXckkNUjUT/view?usp=sharing" target="_blank" className={styles.contactBtn}>
                        Download CV
                    </a>
                </div>

            </div>
            <img src={getImageUrl("hero/heroImage.png")}
                alt="Hero image of mine"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero
