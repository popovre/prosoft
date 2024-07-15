import Cinema from '../cinema/component';
import styles from './style.module.scss';
import CustomPagination from '../custom-pagination/component';
import { FixedSizeList as List, areEqual } from 'react-window';
import { memo } from 'react';
import memoize from 'memoize-one';

const VISIBLE_CINEMAS = 20;

const Cinemas = ({ page, setPage, showAll, cinemas, pagesQty }) => {
  const renderItem = memo(({ index }) => {
    const cinema = cinemas[index];

    return <Cinema cinema={cinema} classNames={['itemCinemaInfinite']} />;
  }, areEqual);

  return (
    <div className={styles.root}>
      <p>cinemas found: {cinemas.length}</p>
      {!showAll && (
        <>
          <div className={styles.information}>
            <p>pages: {pagesQty}</p>
            <p>page: {page}</p>
          </div>
          <CustomPagination setPage={setPage} pagesQty={pagesQty} />
        </>
      )}
      {!showAll ? (
        <ul className={styles.list}>
          {cinemas &&
            cinemas
              ?.slice((page - 1) * VISIBLE_CINEMAS, page * VISIBLE_CINEMAS)
              ?.map((cinema) => (
                <li key={cinema.id}>
                  <Cinema cinema={cinema} />
                </li>
              ))}
        </ul>
      ) : (
        cinemas && (
          <List
            itemCount={cinemas.length}
            height={500}
            itemSize={VISIBLE_CINEMAS}
            width="100%"
          >
            {renderItem}
          </List>
        )
      )}
      {!showAll && <CustomPagination setPage={setPage} pagesQty={pagesQty} />}
    </div>
  );
};

export default Cinemas;
