import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Container from "./Container";
import logo from '../img/logo.png';

function NavBar() {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <Container>
        <Link to="/" className="navbar-brand">
          <img src={logo} loading="lazy" alt="logo" className={styles.logo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`navbar-nav ml-auto ${styles.list}`}>
            <li className={`nav-item ${styles.item}`}>
              <Link to="/" className={`nav ${styles.links}`}>
                Inicio
              </Link>
            </li>
            <li className={`nav-item ${styles.item}`}>
              <Link to="/sobre" className="nav">
                Sobre
              </Link>
            </li>
            <li className={`nav-item ${styles.item}`}>
              <Link to="/cultos" className="nav">
                Cultos
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default NavBar;
