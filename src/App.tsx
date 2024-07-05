import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import clsx from 'clsx';
import { StoreProvider } from './redux/store-provider';

import ButtonIncrement from './components/button-increment/component';

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
    <StoreProvider>
      <div className={styles.root} data-theme={isDark ? 'dark' : 'light'}>
        <div className={styles.content}>Vite + React</div>
        <ButtonIncrement />
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
    </StoreProvider>
  );
}

export default App;
