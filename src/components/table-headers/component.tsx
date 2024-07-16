import styles from './style.module.scss';
import { headers } from './utils';
import clsx from 'clsx';
import Button from '../button/component';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuerySearch } from '../../redux/query-option';

const TableHeaders = ({ sort, setSort }) => {
  const [value, setValue] = useState('');
  const input = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const onSearchButtonClick = () => {
    dispatch(setQuerySearch(String(value)));
  };

  return (
    <div className={styles.root}>
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
          value={value}
          className={styles.search}
          placeholder="Search"
          type="text"
          onChange={(evt) => setValue(evt.target.value)}
        />
        <Button onClick={onSearchButtonClick}>Искать</Button>
      </label>
    </div>
  );
};

export default TableHeaders;
