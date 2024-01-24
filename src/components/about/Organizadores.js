import React from 'react'
import user from '../img/teste.webp'
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom'
import styles from './Organizadores.module.css';

function Organizadores() {
    return (
        <div>
            {/* <section className={styles.lider}>
                <div className={styles.integrantes}>
                    <h1>Integrantes</h1>

                    <div className={styles.principal}>
                        <img src={user} loading="lazy" className={styles.user} alt='retrato' />
                        <div className={styles.leftContent}>
                            <h3><i>Pastor</i></h3>
                            <p>Lorem ipsum dolor sit amet. Vel omnis tempora 33 vitae nostrum sed similique expedita qui quae accusantium aut molestiae quia non optio nisi. </p>
                            <p>Qui sapiente fugiat et voluptatem corporis sed autem maxime et libero numquam est animi accusantium sed iure nobis et dolorum debitis? Et minima autem sed nihil cumque ut voluptas enim.</p>

                        </div>
                    </div> */}

                    {/* <h1>Organizadores</h1>

                    <div className={styles.organizadores}>
                        <ul>
                            <li>
                                <p><i>Integrante 1</i></p>
                                <img src={user} loading="lazy" className={styles.user} alt='retrato' />
                                <p>Lorem ipsum dolor sit amet. Vel omnis tempora 33
                                    vitae nostrum sed similique expedita.</p>
                                <div className={styles.icon}>
                                    <Link to="/"><MdEmail /></Link>
                                    <Link to="/"><FaFacebook /></Link>
                                </div>
                            </li>
                            <li>
                                <p><i>Integrante 2</i></p>
                                <img src={user} loading="lazy" className={styles.user} alt='retrato' />
                                <p>Lorem ipsum dolor sit amet. Vel omnis tempora 33
                                    vitae nostrum sed similique expedita.</p>
                                <div className={styles.icon}>
                                    <Link to="/"><MdEmail /></Link>
                                    <Link to="/"><FaFacebook /></Link>
                                </div>
                            </li>
                            <li>
                                <p><i>Integrante 3</i></p>
                                <img src={user} loading="lazy" className={styles.user} alt='retrato' />
                                <p>Lorem ipsum dolor sit amet. Vel omnis tempora 33
                                    vitae nostrum sed similique expedita.</p>
                                <div className={styles.icon}>
                                    <Link to="/"><MdEmail /></Link>
                                    <Link to="/"><FaFacebook /></Link>
                                </div>
                            </li>
                            <li>
                                <p><i>Integrante 4</i></p>
                                <img src={user} loading="lazy" className={styles.user} alt='retrato' />
                                <p>Lorem ipsum dolor sit amet. Vel omnis tempora 33
                                    vitae nostrum sed similique expedita.</p>
                                <div className={styles.icon}>
                                    <Link to="/"><MdEmail /></Link>
                                    <Link to="/"><FaFacebook /></Link>
                                </div>
                            </li>
                        </ul>
                    </div> */}
                {/* </div> */}
            {/* </section> */}
        </div>
    )
}

export default Organizadores