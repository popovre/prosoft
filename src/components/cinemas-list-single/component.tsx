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
    if (items) {
      for (let i = 0; i < records; i++) {
        if (!items[i]) {
          break;
        }
        cinemasArray.push(
          <li key={items[i].id}>
            <Cinema cinema={items[i]} />
          </li>
        );
      }
    }
    return cinemasArray;
  };

  const loadMore = () => {
    if (records >= cinemasLength) {
      setHasMore(false);
    } else {
      setTimeout(() => {
        setRecords(records + VISIBLE_CINEMAS);
      }, 4000);
    }
  };

  return (
    <div className={styles.root}>
      {cinemas.length ? (
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={hasMore}
          useWindow={false}
          loader={<Loader key="loader" />}
        >
          {cinemas && (
            <ul key="cinemasList" className={styles.list}>
              {createCinemas(cinemas)}
            </ul>
          )}
        </InfiniteScroll>
      ) : (
        <p className={styles.errorMeassage}>Cinemas not found...</p>
      )}
    </div>
  );
};

export default CinemasListSinglePage;
