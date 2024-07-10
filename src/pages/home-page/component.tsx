import { Link } from 'react-router-dom';
import styles from './style.module.scss';

const HomePage = () => {
  return (
    <div className={styles.root}>
      <h2>Добро пожаловать в сервис просмотра фильмов</h2>
      <Link to="/cinemas-table" className={styles.link}>
        Перейти к выбору фильмов
      </Link>
    </div>
  );
};

export default HomePage;
