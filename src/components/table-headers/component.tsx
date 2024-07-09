import styles from './style.module.scss';
import { headers } from './utils';
import clsx from 'clsx';
import Button from '../button/component';
import { useRef } from 'react';
import { useLazyGetCinemasQuery } from '../../redux/services/api';

const TableHeaders = ({ sort, setSort }) => {
  const input = useRef<HTMLInputElement>(null);

  const [trigger, result, lastPromiseInfo] = useLazyGetCinemasQuery();
  console.log(result.data, 'result');

  const onSearchButtonClick = () => {
    if (input.current.value) {
      trigger({ search: String(input.current.value) });
    }
  };

  return (
    <div className={styles.root}>
      <h2>Sorting and Filter</h2>
      <ul className={styles.list}>
        {headers.map((header, index) => (
          <li
            className={clsx(
              sort.keyToSort === header.key && styles.active,
              styles.header
            )}
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
            <div
              className={clsx(
                header.key === sort.keyToSort && styles.triangle,
                sort.direction === 'desc' && styles.triangleDown
              )}
            ></div>
          </li>
        ))}
      </ul>
      <label className={styles.label}>
        <input
          ref={input}
          className={styles.search}
          placeholder="Search"
          type="text"
        />
        <Button onClick={onSearchButtonClick}>Искать</Button>
      </label>
    </div>
  );
};

export default TableHeaders;
