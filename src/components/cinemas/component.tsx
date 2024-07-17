import Cinema from '../cinema/component';
import styles from './style.module.scss';
import CustomPagination from '../custom-pagination/component';
import { FixedSizeList as List, areEqual } from 'react-window';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getViewState } from '../../redux/view';

const VISIBLE_CINEMAS = 20;

const Cinemas = ({ page, setPage, cinemas, pagesQty }) => {
  const view = useSelector((state) => getViewState(state));

  const renderItem = memo(({ index }) => {
    const cinema = cinemas[index];

    return <Cinema cinema={cinema} classNames={['itemCinemaInfinite']} />;
  }, areEqual);

  return (
    <div className={styles.root}>
      <p>cinemas found: {cinemas.length}</p>
      {view === 'pagination' && (
        <>
          <div className={styles.information}>
            <p>pages: {pagesQty}</p>
            <p>page: {page}</p>
          </div>
          <CustomPagination setPage={setPage} pagesQty={pagesQty} />
        </>
      )}
      {view === 'pagination' && (
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
      )}
      {view === 'singlePage' && (
        <List
          itemCount={cinemas.length}
          height={500}
          itemSize={VISIBLE_CINEMAS}
          width="100%"
        >
          {renderItem}
        </List>
      )}
      {view === 'pagination' && (
        <CustomPagination setPage={setPage} pagesQty={pagesQty} />
      )}
    </div>
  );
};

export default Cinemas;
