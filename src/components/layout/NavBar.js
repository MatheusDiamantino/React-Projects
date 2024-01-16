import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Container from "./Container";
import logo from '../img/logo.png';
import { FaUserAlt } from "react-icons/fa";

function NavBar() {
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);

  const handlePerfilClick = () => {
    setMostrarOpcoes(!mostrarOpcoes);
  };

  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/"><img src={logo} loading="lazy" alt="logo" className={styles.logo} /> </Link>
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

          <li className={`${styles.login} ${styles.botaoCTA_2}`}>
            <div className={styles.perfilContainer} onClick={handlePerfilClick}>
              {/* Aqui você pode substituir pelo seu ícone de perfil */}
              <FaUserAlt className={styles.iconePerfil} />
            </div>

            {mostrarOpcoes && (
              <div className={styles.opcoesContainer}>
                {/* Opção 1 */}
                <button className={styles.botaoCTA_2}>Entrar</button>

                {/* Opção 2 */}
                <button className={styles.botaoCTA_2}>Registrar</button>
              </div>
            )}
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default NavBar;
