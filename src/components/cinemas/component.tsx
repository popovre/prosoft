import CinemasListPaginated from '../cinemas-list-paginated/component';
import CinemasListSinglePage from '../cinemas-list-single/component';
import styles from './style.module.scss';

const Cinemas = (props) => {
  const { cinemasLength, view } = props;
  return (
    <div className={styles.root}>
      <p>cinemas found: {cinemasLength}</p>
      {view === 'pagination' ? (
        <CinemasListPaginated {...props} />
      ) : (
        <CinemasListSinglePage {...props} />
      )}
    </div>
  );
};

export default Cinemas;
