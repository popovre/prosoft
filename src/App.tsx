import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import clsx from 'clsx';

function App() {
  const themePreferences = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  const [isDark, setIsDark] = useState(themePreferences);

  useEffect(() => {
    const localThemeMode = localStorage.getItem('isDark');
    const darkMode =
      localThemeMode === null ? themePreferences : JSON.parse(localThemeMode);

    setIsDark(darkMode);
  }, [isDark, themePreferences]);

  return (
    <div className={styles.root} data-theme={isDark ? 'dark' : 'light'}>
      <div className={styles.content}>Vite + React</div>
      <button
        className={clsx(styles.themeToggle)}
        onClick={() => {
          localStorage.setItem('isDark', JSON.stringify(!isDark));
          setIsDark(!isDark);
        }}
      >
        Theme toggle
      </button>
    </div>
  );
}

export default App;
