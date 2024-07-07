import styles from './style.module.scss';

const TableHeaders = () => {
  return (
    <div className={styles.root}>
      <h2>Sorting and Filter</h2>
      <ul className={styles.list}>
        <li>imdb_id</li>
        <li>budget</li>
        <li>original_language</li>
        <li>popularity</li>
        <li>release_date</li>
        <li>revenue</li>
        <li>runtime</li>
        <li>status</li>
        <li>vote_average</li>
        <li>vote_average</li>
      </ul>
      <label className={styles.label}>
        Поиск
        <input className={styles.search} placeholder="Search" type="text" />
      </label>
    </div>
  );
};

export default TableHeaders;
