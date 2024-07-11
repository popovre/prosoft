import { useState } from 'react';
import Header from '../header/component';
import styles from './style.module.scss';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../loader/component';

const Layout = () => {
  const themePreferences = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  const [isDark, setIsDark] = useState(themePreferences);

  const toggleTheme = () => {
    localStorage.setItem('isDark', JSON.stringify(!isDark));
    setIsDark(!isDark);
  };

  useEffect(() => {
    const localThemeMode = localStorage.getItem('isDark');
    const darkMode =
      localThemeMode === null ? themePreferences : JSON.parse(localThemeMode);

    setIsDark(darkMode);
  }, [isDark, themePreferences]);
  return (
    <div className={styles.root} data-theme={isDark ? 'dark' : 'light'}>
      <Header toggleTheme={toggleTheme} />
      <main className={styles.main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
