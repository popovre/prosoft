import { NavLink, Outlet } from 'react-router-dom';
import styles from './style.module.scss';
import Button from '../button/component';

const CinemasTabs = () => {
  return (
    <div className={styles.root}>
      <div className={styles.linkWrapper}>
        <NavLink to="/cinemas-table/all">
          {({ isActive }) => (
            <Button className={styles.button} disabled={isActive}>
              all
            </Button>
          )}
        </NavLink>
        <NavLink to="/cinemas-table/pages">
          {({ isActive }) => (
            <Button className={styles.button} disabled={isActive}>
              pagination
            </Button>
          )}
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default CinemasTabs;
