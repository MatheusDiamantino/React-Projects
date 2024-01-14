import React, { useEffect, useState } from "react";
import styles from './BannerEvents.module.css';

function BannerEvents() {
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
        </div>
    )
}

export default BannerEvents