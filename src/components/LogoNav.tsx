import { motion } from 'framer-motion';
import theme from '../data/theme.json';

interface LogoNavProps {
  version?: string;
}

const LogoNav = ({ version = theme.logo.version }: LogoNavProps) => {
  // Récupérer le thème actif depuis localStorage ou utiliser le thème par défaut
  const activeTheme = localStorage.getItem('portfolio-theme') || theme.activeTheme;
  const { from, via, to } = theme.themes[activeTheme as keyof typeof theme.themes].colors.primary.gradient;
  const { color, size } = theme.themes[activeTheme as keyof typeof theme.themes].colors.primary.shadow;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute left-4"
    >
      <span 
        className={`
          text-${theme.logo.fontSize} 
          font-${theme.logo.fontWeight} 
          bg-gradient-to-r 
          from-${from} 
          via-${via} 
          to-${to} 
          text-transparent 
          bg-clip-text 
          drop-shadow-[0_0_${size}_${color}]
        `}
      >
        Portfolio {version}
      </span>
    </motion.div>
  );
};

export default LogoNav;
