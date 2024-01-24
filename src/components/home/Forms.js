import React from 'react'
import { Link } from 'react-router-dom'
import ButtonLink from '../layout/ButtonLink'
import { FaHome, FaFacebook } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import styles from './Form.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from '../layout/Formulario'

function Forms() {
    return (
        <div>
            <section className={`${styles.contato} mb-4`}>
                <h2 className={` ${styles.titulo}`}>Contato</h2>
                <p className={` text-center w-responsive mx-auto mb-5 `}>
                    Tem alguma dúvida ou feedback? Não hesite em nos contatar diretamente.
                    Nossa equipe retornará a você dentro de algumas horas para ajudar.
                </p>

                <div className="row col-md-12">
                    <div className={`col-md-9 mb-md-0 mb-5`}>
                        <Formulario />
                        <div className={styles.btn_form}>
                            <ButtonLink to="/" text="Enviar" />
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <ul className={`list-unstyled mb-0 ${styles.contato_item}`}>
                            <Link to="https://www.google.com.br/maps/@-23.533203,-46.9098216,3a,75y,171h,90t/data=!3m7!1e1!3m5!1s6zpC8ydb4Mhn2QRdsB_CdA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D6zpC8ydb4Mhn2QRdsB_CdA%26cb_client%3Dsearch.gws-prod.gps%26w%3D86%26h%3D86%26yaw%3D170.99721%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu" className={styles.links}>
                                <li className="d-flex align-items-center">
                                    <FaHome className={`mr-2 ${styles.icon}`} />
                                    <p>Rua das Orquídeas, 328, Jandira/SP</p>
                                </li>
                            </Link>
                            <Link to="https://mail.google.com/mail/u/0/#inbox?compose=new" className={styles.links}>
                                <li className="d-flex align-items-center">
                                    <MdOutgoingMail className={`mr-2 ${styles.icon}`} />
                                    <p>pastordoze12@gmail.com</p>
                                </li>
                            </Link>
                            <Link to="https://www.facebook.com/PastorDoze" className={styles.links}>
                                <li className="d-flex align-items-center">
                                    <FaFacebook className={`mr-2 ${styles.icon}`} />
                                    <p>PastorDoze</p>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Forms