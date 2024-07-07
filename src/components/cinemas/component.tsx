import styles from './style.module.scss';

const Table = ({ cinemas }) => {
  return (
    <ul className={styles.root}>
      {cinemas?.map((cinema) => (
        <li key={cinema.id}>{cinema.id}</li>
      ))}
    </ul>
  );
};

export default Table;
