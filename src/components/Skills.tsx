import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { useTheme } from '../context/ThemeContext';
import { getThemeClasses } from '../utils/theme';

const Skills = () => {
  const { currentTheme, getGradientByTheme, isDarkTheme } = useTheme();
  const gradientClasses = getGradientByTheme(currentTheme);
  const themeClasses = getThemeClasses(currentTheme);

  const skills = [
    {
      name: 'React',
      icon: '/skills/react.svg',
      level: '90%'
    },
    {
      name: 'TypeScript',
      icon: '/skills/typescript.svg',
      level: '85%'
    },
    {
      name: 'JavaScript',
      icon: '/skills/javascript.svg',
      level: '90%'
    },
    {
      name: 'PHP',
      icon: '/skills/php.svg',
      level: '85%'
    },
    {
      name: 'Symfony',
      icon: '/skills/symfony.svg',
      level: '80%'
    },
    {
      name: 'MySQL',
      icon: '/skills/mysql.svg',
      level: '85%'
    },
    {
      name: 'MongoDB',
      icon: '/skills/mongo.svg',
      level: '75%'
    },
    {
      name: 'Docker',
      icon: '/skills/docker.svg',
      level: '70%'
    },
    {
      name: 'Git',
      icon: '/skills/git.svg',
      level: '85%'
    },
    {
      name: 'HTML5',
      icon: '/skills/html-5.svg',
      level: '95%'
    },
    {
      name: 'CSS3',
      icon: '/skills/css-3.svg',
      level: '90%'
    }
    ,
    {
      name: 'Python',
      icon: '/skills/python.svg',
      level: '80%'
    }
    ,
    {
      name: 'Flask',
      icon: '/skills/flask.svg',
      level: '60%'
    }
    ,
    {
      name: 'Fast API',
      icon: '/skills/FastAPI.svg',
      level: '60%'
    }
  ];

  return (
    <section id="skills" className={`py-20 ${isDarkTheme() ? 'bg-gray-950' : 'bg-gray-900'} transition duration-300`}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition duration-300`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5
            }
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl font-bold ${themeClasses.text.primary} mb-8 relative inline-block pb-2`}>
            Compétences
            <div className={`absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r ${gradientClasses}`} />
          </h2>
          <p className={`${themeClasses.text.secondary} mb-12 max-w-2xl mx-auto`}>
            Un aperçu de mes compétences techniques et de mon expertise dans différentes technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              level={skill.level}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
