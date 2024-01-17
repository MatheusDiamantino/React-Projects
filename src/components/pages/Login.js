import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Login.module.css'
import { Link } from 'react-router-dom';
import login from '../img/login.webp'

function Login() {
    return (
        <section className="vh-100">
            <div className={`container-fluid h-custom ${styles.container}`}>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img
                            src={login}
                            className="img-fluid"
                            alt="Sample image"
                        />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example3">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="form3Example3"
                                    className="form-control form-control-lg"
                                />

                            </div>

                            {/* Password input */}
                            <div className="form-outline mb-3">
                                <label className="form-label" htmlFor="form3Example4">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="form3Example4"
                                    className="form-control form-control-lg"
                                />
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                {/* Checkbox */}
                                <div className="form-check mb-0">
                                    <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        value=""
                                        id="form2Example3"
                                    />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">
                                    Esqueceu a senha?
                                </a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button
                                    type="button"
                                    className={`${styles.btn}`}
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Login