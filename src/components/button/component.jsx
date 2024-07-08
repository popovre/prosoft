import clsx from 'clsx';

const Button = ({ children, disabled = false, classNames, onClick }) => {
  return (
    <button
      disabled={disabled}
      className={clsx(classNames)}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
