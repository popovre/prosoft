import styles from './style.module.scss';
import { headers } from './utils';

const TableHeaders = ({ sort, setSort }) => {
  return (
    <div className={styles.root}>
      <h2>Sorting and Filter</h2>
      <ul className={styles.list}>
        {headers.map((header, index) => (
          <li
            key={index}
            onClick={() => {
              console.log(header.key);
              setSort({
                keyToSort: header.key,
                direction:
                  header.key === sort.keyToSort
                    ? sort.direction === 'asc'
                      ? 'desc'
                      : 'asc'
                    : 'desc',
              });
            }}
          >
            {header.key}
          </li>
        ))}
      </ul>
      <label className={styles.label}>
        Поиск
        <input className={styles.search} placeholder="Search" type="text" />
      </label>
    </div>
  );
};

export default TableHeaders;
