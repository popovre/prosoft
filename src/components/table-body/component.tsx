import CinemasContainer from '../cinemas/container';
import styles from './style.module.scss';

const TableBody = () => {
  return (
    <div className={styles.root}>
      <h2>Table body</h2>
      <CinemasContainer />
    </div>
  );
};

export default TableBody;
