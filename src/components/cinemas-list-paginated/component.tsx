import Cinema from '../cinema/component';
import CustomPagination from '../custom-pagination/component';
import styles from './styles.module.scss';

const VISIBLE_CINEMAS = 20;

const CinemasListPaginated = ({ page, setPage, cinemas, pagesQty, view }) => {
  return (
    <div className={styles.root}>
      <div className={styles.information}>
        <p>pages: {pagesQty}</p>
        <p>page: {page}</p>
      </div>
      <CustomPagination setPage={setPage} pagesQty={pagesQty} />
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
      <CustomPagination setPage={setPage} pagesQty={pagesQty} />
    </div>
  );
};

export default CinemasListPaginated;
