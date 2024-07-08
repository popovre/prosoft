import styles from './style.module.scss';
import Button from '../button/component';

const CinemasTabs = ({ showAll, setShowAll }) => {
  return (
    <div className={styles.root}>
      <Button
        className={styles.button}
        disabled={showAll}
        onClick={() => {
          setShowAll(true);
        }}
      >
        all
      </Button>
      <Button
        className={styles.button}
        disabled={!showAll}
        onClick={() => {
          setShowAll(false);
        }}
      >
        pagination
      </Button>
    </div>
  );
};

export default CinemasTabs;
