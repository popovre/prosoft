import { Link } from 'react-router-dom';
import styles from './style.module.scss';

const Header = ({ toggleTheme }) => {
  return (
    <header className={styles.root}>
      <Link className={styles.link} to="/">
        Домой
      </Link>
      <h1 className={styles.title}>Приложение для просмотра фильмов</h1>
      <button className={styles.button} onClick={toggleTheme}>
        Сменить тему
      </button>
    </header>
  );
};

export default Header;
