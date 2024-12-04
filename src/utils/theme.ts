import themeData from '../data/theme.json';

type ThemeKey = keyof typeof themeData.themes;

export const getThemeClasses = (themeKey: string = themeData.activeTheme) => {
  const theme = themeData.themes[themeKey as ThemeKey];
  
  return {
    gradient: {
      purple: 'from-purple-500 via-purple-400 to-pink-400',
      blue: 'from-blue-500 via-cyan-400 to-teal-400',
      green: 'from-green-500 via-emerald-400 to-lime-400'
    }[themeKey],
    text: {
      primary: 'text-gray-200',
      secondary: 'text-gray-400',
      hover: 'hover:text-gray-200'
    },
    background: {
      navbar: 'bg-gray-950',
      dropdown: 'bg-gray-900',
      button: 'bg-gray-900/50 hover:bg-gray-900/75',
      hover: 'bg-gray-900/80'
    },
    border: {
      primary: {
        purple: 'border-purple-500',
        blue: 'border-blue-500',
        green: 'border-green-500'
      }[themeKey],
      secondary: {
        purple: 'border-purple-300',
        blue: 'border-blue-300',
        green: 'border-green-300'
      }[themeKey]
    }
  };
};

export const getThemeName = (themeKey: string): string => {
  return themeData.themes[themeKey as ThemeKey]?.name || 'Default Theme';
};

export const getAllThemes = () => {
  return Object.entries(themeData.themes).map(([key, theme]) => ({
    key,
    name: theme.name
  }));
};
