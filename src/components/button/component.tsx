import clsx from 'clsx';
import styles from './style.module.scss';

const Button = ({ children, disabled = false, classNames, onClick }) => {
  return (
    <button
      disabled={disabled}
      className={clsx(classNames?.map((style) => styles[style]))}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
