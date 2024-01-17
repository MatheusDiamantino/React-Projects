import styles from './BannerAbout.module.css';
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";

function BannerAbout() {

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const secao1 = document.getElementById("secao1");
            const secao1Position = secao1.getBoundingClientRect().top;

            if (secao1Position < window.innerHeight * 0.75) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div>
            <section id="inicio" className={`${styles.mainSection} ${scrolled ? styles.parallax : ""}`}>
                <div id="secao1" className={`column_wrapper ${styles.responsiveWrapper}`}>
                    <div className={`content_wrapper ${styles.responsiveContent} ${styles.container} ${scrolled ? styles.parallax : ""}`}>
                        <h2>Cultos e Lives</h2>
                    </div>
                </div>
            </section>
            <section className={styles.sobre_section}>
                <div className={styles.info}>
                    <h5><i>Nosso chamado?</i></h5>
                    <h1>Ministério Reedificando o Altar</h1>
                    <p>O Ministério Reedificando o Altar (M.R.A) tem como propósito enfatizar a profunda importância de entregar integralmente a vida a Deus, simbolizada pelo altar. Ao fazer da vida o centro de nossa atenção, o M.R.A destaca o convite caloroso para que as pessoas dediquem toda a sua existência ao nobre serviço e adoração ao Senhor.</p>
                    <Link to="https://www.facebook.com/groups/ministerioreedificandooaltar">
                        <button className={styles.btn}>Visite Aqui!</button>
                    </Link>
                </div>
            </section></div>
    )
}

export default BannerAbout