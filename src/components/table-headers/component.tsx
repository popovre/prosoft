import styles from './style.module.scss';

const TableHeaders = () => {
  return (
    <div className={styles.root}>
      <h2>Headers</h2>
      <label className={styles.label}>
        <input className={styles.search} placeholder="Search" type="text" />
      </label>
    </div>
  );
};

export default TableHeaders;
