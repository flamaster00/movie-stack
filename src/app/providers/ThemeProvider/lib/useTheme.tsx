import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const activeTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(activeTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, activeTheme);
  };

  return { theme, toggleTheme };
}
