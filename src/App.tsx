import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { StoreProvider } from './redux/store-provider';

import ButtonIncrement from './components/button-increment/component';
import Header from './components/header/component';
import Footer from './components/footer/component';

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
          <div className={styles.content}>Vite + React</div>
          <ButtonIncrement />
        </main>
        <Footer />
      </div>
    </StoreProvider>
  );
}

export default App;
