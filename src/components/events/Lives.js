import styles from './Lives.module.css';
import React, { useEffect, useState } from "react";
import pastordoze1 from '../img/pastordoze1.webp';
import pastoradoze from '../img/pastoradoze.webp';
import presb from '../img/presb.webp';
import cintia from '../img/cintia.webp';
import { Link } from 'react-router-dom';
import Loading from '../layout/Loading';
import camila from '../img/camila.webp';
import deia from '../img/deia.webp';


function Lives() {
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        // Simula um temporizador de 5 segundos antes de mostrar os conteúdos
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleLoad = () => {
        // Este callback será chamado quando o vídeo for carregado
        setLoading(false);
    };

    return (
        <div>
            <Link to="https://fb.watch/pwoA08PcuK/" className={styles.link}>
                <section className={styles.lives}>
                    <div className={styles.live}>
                        <img src={presb} alt='pastor' loading="lazy" />
                        <div className={styles.textContainer}>
                            <h4><span>Live</span> - Reconstruindo o altar</h4>
                            <h5>Terça, 9 de janeiro de 2024 às 19:50</h5>
                            <p>Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo." - Mateus 28:19</p>
                        </div>
                    </div>
                </section>
            </Link>

            <Link to="https://fb.watch/pwpbpv_87x/" className={styles.link}>
                <section className={styles.lives}>
                    <div className={styles.live}>
                        <img src={pastordoze1} alt='pastor' loading="lazy" />
                        <div className={styles.textContainer}>
                            <h4><span>Live</span> - Reconstruindo o altar</h4>
                            <h5>Terça, 2 de janeiro de 2024 às 19:56</h5>
                            <p>E disse-lhe Jesus: Hoje veio a salvação a esta casa, pois também este é filho de Abraão.
                                Lucas 19-9</p>
                        </div>
                    </div>
                </section>
            </Link>
            <Link to="https://fb.watch/pwp6zPP5D-/" className={styles.link}>
                <section className={styles.lives}>
                    <div className={styles.live}>
                        <img src={pastoradoze} alt='pastor' loading="lazy" />
                        <div className={styles.textContainer}>
                            <h4><span>Live</span> - Reconstruindo o altar</h4>
                            <h5>Terça, 26 de dezembro de 2023 às 19:56</h5>
                            <p>Porque o Filho do Homem veio buscar e salvar o que se havia perdido. Lucas 19:10</p>
                        </div>
                    </div>
                </section>
            </Link>
            <Link to="https://fb.watch/pAUQGPW7mj/" className={styles.link}>
                <section className={styles.lives}>
                    <div className={styles.live}>
                        <img src={cintia} alt='pastor' loading="lazy" />
                        <div className={styles.textContainer}>
                            <h4><span>Live</span> - Reconstruindo o altar</h4>
                            <h5>Terça, 21 de Novembro de 2023 às 19:54</h5>
                            <p>O coração do homem planeja o seu caminho, mas o Senhor lhe dirige os passos. Provérbios 16:9</p>
                        </div>
                    </div>
                </section>
            </Link>
            <Link to="https://fb.watch/pAUHDYtufB/" className={styles.link}>
                <section className={styles.lives}>
                    <div className={styles.live}>
                        <img src={camila} alt='pastor' loading="lazy" />
                        <div className={styles.textContainer}>
                            <h4><span>Live</span> - Reconstruindo o altar</h4>
                            <h5>Terça, 7 de Novembro de 2023 às 19:57</h5>
                            <p>Salmos 27 - Uma coisa peço ao Senhor.</p>
                        </div>
                    </div>
                </section>
            </Link>
            <Link to="https://fb.watch/pAVkkf5_55/" className={styles.link}>
                <section className={styles.lives}>
                    <div className={styles.live}>
                        <img src={deia} alt='pastor' loading="lazy" />
                        <div className={styles.textContainer}>
                            <h4><span>Live</span> - Reconstruindo o altar</h4>
                            <h5>Terça, 7 de Novembro de 2023 às 19:57</h5>
                            <p>Salmos 27 - Uma coisa peço ao Senhor.</p>
                        </div>
                    </div>
                </section>
            </Link>
        </div>
    )
}

export default Lives