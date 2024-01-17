import React from "react";
import { Parallax } from "react-parallax";
import styles from "./BannerSection.module.css";
import eventos from '../img/eventos.webp'

function BannerSection() {
  return (
    <section className={styles.mainSection}>
      <Parallax bgImage={eventos} loading="lazy" strength={500}>
        <div className={`${styles.responsiveContent} ${styles.container}`}>
          <h2>
            "Posso todas as coisas naquele que me fortalece." <br /> Filipenses
            4:13
          </h2>
        </div>
      </Parallax>
    </section>
  );
}

export default BannerSection;
