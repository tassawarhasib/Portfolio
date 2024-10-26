import React from 'react';
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

const Footer = () => {
    return (
        <footer className={styles.container} id="footer">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel Free to reach out!</p>
            </div>

            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="" />
                    <a href="mailto:tassawarhasib@gmail.com">tassawarhasib@gmail.com</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="" />
                    <a href="https://github.com/tassawarhasib">GitHub</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="" />
                    <a href="https://www.linkedin.com/in/tassawarhasib">Leetcode</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;
