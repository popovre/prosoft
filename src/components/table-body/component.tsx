import CinemasTabs from '../cinemas-tabs/component';
import styles from './style.module.scss';
import CinemasContainer from '../cinemas/container';

const TableBody = () => {
  return (
    <div className={styles.root}>
      <CinemasTabs />
      <CinemasContainer />
    </div>
  );
};

export default TableBody;
