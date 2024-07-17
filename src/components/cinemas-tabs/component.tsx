import styles from './style.module.scss';
import Button from '../button/component';
import { IoMdAlbums } from 'react-icons/io';
import { IoIosListBox } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import {
  getViewState,
  setViewPagination,
  setViewSinglePage,
} from '../../redux/view';

const CinemasTabs = () => {
  const view = useSelector((state) => getViewState(state));
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <Button
        classNames={['button']}
        disabled={view === 'singlePage'}
        onClick={() => {
          dispatch(setViewSinglePage());
        }}
      >
        <IoIosListBox />
      </Button>
      <Button
        classNames={['button']}
        disabled={view === 'pagination'}
        onClick={() => {
          dispatch(setViewPagination());
        }}
      >
        <IoMdAlbums />
      </Button>
    </div>
  );
};

export default CinemasTabs;
