import TableBody from '../table-body/component';
import TableHeaders from '../table-headers/component';
import styles from './styles.module.scss';
import { selectSort } from '../../redux/sort';
import { useSelector } from 'react-redux';

const Table = () => {
  const sort = useSelector((state) => selectSort(state));

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
      <TableHeaders />
      <TableBody getSortedArray={getSortedArray} />
    </div>
  );
};

export default Table;
