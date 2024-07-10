import Cinema from '../cinema/component';
import styles from './style.module.scss';

const Cinemas = ({ showAll, cinemas }) => {
  return (
    <ul className={styles.list}>
      {cinemas &&
        cinemas?.slice(0, 100)?.map((cinema) => (
          <li key={cinema.id}>
            <Cinema cinema={cinema} />
          </li>
        ))}
    </ul>
  );
};

export default Cinemas;
