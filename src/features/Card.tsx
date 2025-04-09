import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.scss"

type CardProps = {
    name: string;
    tags: string[];
    visibility: boolean;
}

export const Card = ({ name, tags, visibility}: CardProps) => {




    if (visibility) {
        return (
        <div>
            <Link to="/projects">
                <button className={styles.buttonCard}>
                    <div className={styles.card}>
                        <img src="../../src/assets/header-background.jpg" width="350px" height="150px" className={styles.buttonImage}></img>
                        <h3>Unholy Lotus</h3>
                        <h4>Guild Management App</h4>
                    </div>
                </button>
            </Link>
        </div>)
    } else {
        return (
        <div className={styles.hiddenComponent}>
        </div>)
    }
};