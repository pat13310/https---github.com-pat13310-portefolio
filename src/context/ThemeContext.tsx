import React, { createContext, useContext, useState, useEffect } from 'react';
import theme from '../data/theme.json';

type ThemeKey = 'purple' | 'blue' | 'green' | 'orange';

interface ThemeContextType {
  currentTheme: ThemeKey;
  setCurrentTheme: (theme: ThemeKey) => void;
  getGradientByTheme: (themeKey: ThemeKey) => string;
  isDarkTheme: () => boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>('purple');

  const updateTheme = (newTheme: ThemeKey) => {
    setCurrentTheme(newTheme);
    document.documentElement.classList.remove('theme-purple', 'theme-blue', 'theme-green', 'theme-orange');
    document.documentElement.classList.add(`theme-${newTheme}`);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  const getGradientByTheme = (themeKey: ThemeKey): string => {
    const selectedTheme = theme.themes[themeKey];
    return `from-${selectedTheme.colors.primary.gradient.from} via-${selectedTheme.colors.primary.gradient.via} to-${selectedTheme.colors.primary.gradient.to}`;
  };

  const isDarkTheme = () => {
    return ['purple', 'blue', 'green', 'orange'].includes(currentTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as ThemeKey || 'purple';
    updateTheme(savedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme: updateTheme, getGradientByTheme, isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
