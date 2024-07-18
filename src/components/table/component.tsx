import TableBody from '../table-body/component';
import TableHeaders from '../table-headers/component';
import styles from './styles.module.scss';

const Table = () => {
  return (
    <div className={styles.root}>
      <TableHeaders />
      <TableBody />
    </div>
  );
};

export default Table;
