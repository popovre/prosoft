import styles from './style.module.scss';
import clsx from 'clsx';

import Button from '../button/component';
import { sortHeaders } from './utils';

import { useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectSort } from '../../redux/sort';
import { setSort } from '../../redux/sort';
import { setQuerySearch, selectOptionsSearch } from '../../redux/query-option';

import { IoIosSearch } from 'react-icons/io';

const TableHeaders = () => {
  const input = useRef<HTMLInputElement>(null);
  const sort = useSelector((state) => selectSort(state));

  const [inputValue, setInputValue] = useState(
    useSelector((state) => selectOptionsSearch(state))
  );
  const dispatch = useDispatch();

  const onSearchButtonClick = () => {
    dispatch(setQuerySearch(String(inputValue)));
  };

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {sortHeaders.map((header, index) => (
          <li
            className={clsx(
              sort.keyToSort === header.key && styles.active,
              styles.header
            )}
            key={index}
            onClick={() => {
              dispatch(
                setSort({
                  keyToSort: header.key,
                  direction:
                    header.key === sort.keyToSort
                      ? sort.direction === 'asc'
                        ? 'desc'
                        : 'asc'
                      : 'desc',
                })
              );
            }}
          >
            {header.key}
            <div
              className={clsx(
                header.key === sort.keyToSort && styles.triangle,
                sort.direction === 'desc' && styles.triangleDown
              )}
            />
          </li>
        ))}
      </ul>
      <label className={styles.label}>
        <input
          ref={input}
          value={inputValue}
          className={styles.search}
          placeholder="Search"
          type="text"
          onChange={(evt) => {
            setInputValue(evt.target.value);
          }}
        />
        <Button classNames={['button']} onClick={onSearchButtonClick}>
          <IoIosSearch className={styles.icon} />
        </Button>
      </label>
    </div>
  );
};

export default TableHeaders;
