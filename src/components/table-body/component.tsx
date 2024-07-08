import { useState } from 'react';
import CinemasTabs from '../cinemas-tabs/component';
import styles from './style.module.scss';
import CinemasContainer from '../cinemas/container';

const TableBody = ({ getSortedArray }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className={styles.root}>
      <h2>Table body</h2>
      <CinemasTabs showAll={showAll} setShowAll={setShowAll} />
      <CinemasContainer getSortedArray={getSortedArray} showAll={showAll} />
    </div>
  );
};

export default TableBody;
