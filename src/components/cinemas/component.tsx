import Cinema from '../cinema/component';
import styles from './style.module.scss';
import CustomPagination from '../custom-pagination/component';

const VISIBLE_CINEMAS = 20;

const Cinemas = ({ page, setPage, showAll, cinemas, pagesQty }) => {
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
      <ul className={styles.list}>
        {cinemas &&
          cinemas
            ?.slice(
              showAll ? 0 : (page - 1) * VISIBLE_CINEMAS,
              showAll ? undefined : page * VISIBLE_CINEMAS
            )
            ?.map((cinema) => (
              <li key={cinema.id}>
                <Cinema cinema={cinema} />
              </li>
            ))}
      </ul>
      {!showAll && <CustomPagination setPage={setPage} pagesQty={pagesQty} />}
    </div>
  );
};

export default Cinemas;
