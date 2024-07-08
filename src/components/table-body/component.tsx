import CinemasTabsContainer from '../cinemas-tabs/container';
import styles from './style.module.scss';

const TableBody = () => {
  return (
    <div className={styles.root}>
      <h2>Table body</h2>
      <CinemasTabsContainer />
    </div>
  );
};

export default TableBody;
