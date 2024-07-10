import { useState } from 'react';
import TableBody from '../table-body/component';
import TableHeaders from '../table-headers/component';
import styles from './styles.module.scss';

const Table = () => {
  const [sort, setSort] = useState({ keyToSort: 'imdb_id', direction: 'asc' });
  // const [search, setSearch] = useState({ search: '' });

  const getSortedArray = (arrayToSort) => {
    if (sort.direction === 'asc') {
      return arrayToSort.sort((a, b) =>
        a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1
      );
    }
    return arrayToSort.sort((a, b) =>
      a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1
    );
  };

  return (
    <div className={styles.root}>
      <TableHeaders sort={sort} setSort={setSort} />
      <TableBody getSortedArray={getSortedArray} />
    </div>
  );
};

export default Table;
