import CinemasTabs from '../cinemas-tabs/component';
import styles from './style.module.scss';
import CinemasContainer from '../cinemas/container';

const TableBody = ({ getSortedArray }) => {
  return (
    <div className={styles.root}>
      <CinemasTabs />
      <CinemasContainer getSortedArray={getSortedArray} />
    </div>
  );
};

export default TableBody;
