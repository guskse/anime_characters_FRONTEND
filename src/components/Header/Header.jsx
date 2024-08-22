import styles from "./Header.module.scss";
import logo from "../../icons/character-icon.png";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <header>
      <div className={styles.header}>
        <Link to="/">
          <img src={logo} alt="My Anime Characters" />
        </Link>
        <Link to="/">
          <h2 className={styles.title}>{title}</h2>
        </Link>
        <div>
          <Link to="characters">View List</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
