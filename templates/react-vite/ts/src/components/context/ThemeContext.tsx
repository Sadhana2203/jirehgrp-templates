// @/components/common/ThemeContext.tsx

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check for theme preference in local storage on initial render
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      return savedTheme;
    }
    // Check for system preference if no theme is saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    // Apply the theme class to the <html> element
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);

    // Save the theme preference to local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark: theme === 'dark',
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }
  return ctx;
}