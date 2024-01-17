import React from "react";
import BannerSection from "../home/BannerSection";
import BannerCultos from "../home/BannerCultos";
import BannerSobre from "../home/BannerSobre";
import Forms from "../home/Forms";
import styles from "./Inicio.module.css"; // Import your CSS module if you have one

function Inicio() {
  return (
    <div className={styles.container}>
      <BannerSection />

      <BannerCultos />

      <BannerSobre />

      <Forms />
    </div>
  );
}

export default Inicio;
