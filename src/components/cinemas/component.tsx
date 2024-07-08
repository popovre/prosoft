import styles from './style.module.scss';

const Cinemas = ({ cinemas, getSortedArray }) => {
  console.log(cinemas);
  return (
    <ul className={styles.list}>
      {getSortedArray(cinemas)?.map((cinema) => (
        <li key={cinema.id}>{cinema.id}</li>
      ))}
    </ul>
  );
};

export default Cinemas;
