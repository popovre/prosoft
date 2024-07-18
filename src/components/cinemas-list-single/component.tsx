import InfiniteScroll from 'react-infinite-scroller';
import styles from './style.module.scss';
import Cinema from '../cinema/component';
import { useState } from 'react';
import Loader from '../loader/component';

const VISIBLE_CINEMAS = 20;

const CinemasListSinglePage = ({
  page,
  setPage,
  cinemas,
  pagesQty,
  view,
  cinemasLength,
}) => {
  const [hasMore, setHasMore] = useState(true);
  const [records, setRecords] = useState(VISIBLE_CINEMAS);

  const createCinemas = (items) => {
    let cinemasArray = [];
    for (let i = 0; i < records; i++) {
      cinemasArray.push(
        <div key={i}>
          <Cinema cinema={items[i]} />{' '}
        </div>
      );
    }
    return cinemasArray;
  };

  const loadMore = () => {
    if (records === cinemasLength) {
      setHasMore(false);
    } else {
      setTimeout(() => {
        setRecords(records + VISIBLE_CINEMAS);
      }, 1000);
    }
  };

  return (
    <div className={styles.root}>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        useWindow={false}
        loader={<Loader />}
      >
        {
          // cinemas &&
          //   cinemas?.map((cinema) => (
          //     <li key={cinema.id}>
          //       <Cinema cinema={cinema} />
          //     </li>
          //   ))
          createCinemas(cinemas)
        }
      </InfiniteScroll>
    </div>
  );
};

export default CinemasListSinglePage;
