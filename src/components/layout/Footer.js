import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "../layout/Footer.module.css";
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <Link  className={styles.links} to="https://www.facebook.com/groups/ministerioreedificandooaltar/"><FaFacebook /></Link>
        </li>
        <li>
          <Link className={styles.links} to="/"><FaInstagram /></Link>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>PastorDoze</span> &copy; 2023{" "}
      </p>
    </footer>
  );
}

export default Footer;
