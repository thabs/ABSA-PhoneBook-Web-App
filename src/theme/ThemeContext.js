import React, {useState, useMemo, createContext, useEffect} from 'react';
//! Theme configs
import LightTheme from './lightTheme';
import DarkTheme from './darkTheme';

const ThemeContext = createContext();

const isDarkTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const ThemeProvider = ({children}) => {
  //! State
  const [theme, setTheme] = useState(isDarkTheme() ? DarkTheme : LightTheme);

  const mqListener = (e) => {
    const dark = e.matches;
    if (dark) setTheme(DarkTheme);
    else setTheme(LightTheme);
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addListener(mqListener);
    return () => darkThemeMq.removeListener(mqListener);
  }, []);

  const preferences = useMemo(
    () => ({
      theme
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={preferences}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeContext, ThemeProvider};
