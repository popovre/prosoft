import styles from './style.module.scss';
import { headers } from './utils';
import clsx from 'clsx';
import Button from '../button/component';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setQuerySearch } from '../../redux/query-option';

const TableHeaders = ({ sort, setSort }) => {
  const input = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const onSearchButtonClick = () => {
    if (input.current?.value) {
      dispatch(setQuerySearch(String(input.current?.value)));
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
