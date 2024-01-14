// NavBar.js
import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Container from "./Container";
import logo from '../img/logo.png'

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/"><img src={logo} alt="logo" className={styles.logo}/> </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Inicio</Link>
          </li>
          <li className={styles.item}>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li className={styles.item}>
            <Link to="/cultos">Cultos</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default NavBar;
