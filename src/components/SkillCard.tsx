import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { getThemeClasses } from '../utils/theme';

interface SkillCardProps {
  name: string;
  icon: string;
  level: string;
  index: number;
}

const SkillCard = ({ name, icon, level, index }: SkillCardProps) => {
  const { currentTheme, getGradientByTheme } = useTheme();
  const gradientClasses = getGradientByTheme(currentTheme);
  const themeClasses = getThemeClasses(currentTheme);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 hover:shadow-lg transition-all duration-300 group ${themeClasses.background.button}`}
    >
      <div className="flex flex-col items-center space-y-3">
        <div className={`w-12 h-12 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform duration-300 ${themeClasses.background.dropdown}`}>
          <img src={icon} alt={name} className="w-8 h-8" />
        </div>
        <div className="w-full text-center">
          <h3 className={`text-base font-semibold ${themeClasses.text.primary} mb-2`}>{name}</h3>
          <div className="relative w-full h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: level }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${gradientClasses}`}
            />
          </div>
          <span className={`text-xs ${themeClasses.text.secondary} mt-1 block`}>{level}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
