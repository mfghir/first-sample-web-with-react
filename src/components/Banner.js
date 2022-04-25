import React from "react";

import styles from "./Banner.module.css";
import banner from "../images/stars_galaxies.jpg";

const Banner = () => {
  return (
    <div className={styles.container}>
      <img src={banner} alt="banner" />
      <div className={styles.textContainer}>
        <h1>Mfgh.ir</h1>
        <p>
          We're learning <span>React.js</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
