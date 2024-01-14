import styles from './Lives.module.css';
import React, { useEffect, useState } from "react";
import pastordoze1 from '../img/pastordoze1.png';
import pastoradoze from '../img/pastoradoze.png';
import presb from '../img/presb.png';
import { Link } from 'react-router-dom';
import Loading from '../layout/Loading';

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


            {loading ? (
                // Exibe o indicador de carregamento enquanto a página está carregando
                <Loading />
            ) : (
                // Exibe os conteúdos da página quando o carregamento estiver concluído
                <>


                    <Link to="https://fb.watch/pwoA08PcuK/" className={styles.link}>
                        <section className={styles.lives}>
                            <div className={styles.live}>
                                <img src={presb} alt='pastor' onLoad={handleLoad} />
                                <div className={styles.textContainer}>
                                    <h4><span>Live</span> - Reconstruindo o altar</h4>
                                    <h5>Terça, 2 de janeiro de 2023 às 19:56</h5>
                                    <p>Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo." - Mateus 28:19</p>
                                </div>
                            </div>
                        </section>
                    </Link>

                    <Link to="https://fb.watch/pwpbpv_87x/" className={styles.link}>
                        <section className={styles.lives}>
                            <div className={styles.live}>
                                <img src={pastordoze1} alt='pastor' />
                                <div className={styles.textContainer}>
                                    <h4><span>Live</span> - Reconstruindo o altar</h4>
                                    <h5>Terça, 2 de janeiro de 2023 às 19:56</h5>
                                    <p>E disse-lhe Jesus: Hoje veio a salvação a esta casa, pois também este é filho de Abraão.
                                        Lucas 19-9</p>
                                </div>
                            </div>
                        </section>
                    </Link>
                    <Link to="https://fb.watch/pwp6zPP5D-/" className={styles.link}>
                        <section className={styles.lives}>
                            <div className={styles.live}>
                                <img src={pastoradoze} alt='pastor' />
                                <div className={styles.textContainer}>
                                    <h4><span>Live</span> - Reconstruindo o altar</h4>
                                    <h5>Terça, 26 de dezembro de 2023 às 19:56</h5>
                                    <p>Porque o Filho do Homem veio buscar e salvar o que se havia perdido. Lucas 19:10</p>
                                </div>
                            </div>
                        </section>
                    </Link>
                </>
            )}
        </div>
    )
}

export default Lives