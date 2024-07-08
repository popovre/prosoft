import styles from './style.module.scss';

const Cinemas = ({ cinemas }) => {
  return (
    <ul className={styles.list}>
      {cinemas?.map((cinema) => (
        <li key={cinema.id}>{cinema.id}</li>
      ))}
    </ul>
  );
};

export default Cinemas;
