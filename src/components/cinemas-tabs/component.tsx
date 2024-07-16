import styles from './style.module.scss';
import Button from '../button/component';
import { IoMdAlbums } from 'react-icons/io';
import { IoIosListBox } from 'react-icons/io';

const CinemasTabs = ({ showAll, setShowAll }) => {
  return (
    <div className={styles.root}>
      <Button
        classNames={['button']}
        disabled={showAll}
        onClick={() => {
          setShowAll(true);
        }}
      >
        <IoIosListBox />
      </Button>
      <Button
        classNames={['button']}
        disabled={!showAll}
        onClick={() => {
          setShowAll(false);
        }}
      >
        <IoMdAlbums />
      </Button>
    </div>
  );
};

export default CinemasTabs;
