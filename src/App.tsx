import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { StoreProvider } from './redux/store-provider';

import Header from './components/header/component';
import Table from './components/table/component';

function App() {
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
    <StoreProvider>
      <div className={styles.root} data-theme={isDark ? 'dark' : 'light'}>
        <Header toggleTheme={toggleTheme} />
        <main className={styles.main}>
          <Table />
        </main>
      </div>
    </StoreProvider>
  );
}

export default App;
