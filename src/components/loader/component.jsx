import clsx from 'clsx';
import styles from './styles.module.scss';

const Loader = ({ classNames }) => {
  return (
    <div
      className={clsx(
        styles.root,
        classNames?.map((style) => styles[style])
      )}
    ></div>
  );
};

export default Loader;
