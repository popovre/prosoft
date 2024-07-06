import styles from './style.module.scss';

const Header = ({ toggleTheme }) => {
  return (
    <header className={styles.root}>
      <h1 className={styles.title}>Приложение для просмотра фильмов</h1>
      <button className={styles.button} onClick={toggleTheme}>
        Сменить тему
      </button>
    </header>
  );
};

export default Header;
