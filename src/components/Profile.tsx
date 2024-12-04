import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { getThemeClasses } from '../utils/theme';
import profileData from '../data/profile.json';

const ProfileAvatar = () => {
  const { currentTheme, getGradientByTheme } = useTheme();
  const gradientClasses = getGradientByTheme(currentTheme);
  const hasAvatar = profileData.avatar !== '/profile/avatar.jpg';

  return (
    <div className="relative w-32 h-32 mx-auto mb-8">
      <div className={`absolute inset-0 bg-gradient-to-r ${gradientClasses} rounded-full animate-pulse`}></div>
      <div className={`absolute inset-[3px] ${getThemeClasses(currentTheme).background.dropdown} rounded-full flex items-center justify-center overflow-hidden`}>
        {hasAvatar ? (
          <img 
            src={profileData.avatar} 
            alt={`${profileData.firstName} ${profileData.lastName}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className={`text-2xl font-bold ${getThemeClasses(currentTheme).text.primary}`}>
            {profileData.initials}
          </span>
        )}
      </div>
    </div>
  );
};

const Profile = () => {
  const { currentTheme, getGradientByTheme } = useTheme();
  const themeClasses = getThemeClasses(currentTheme);
  const gradientClasses = getGradientByTheme(currentTheme);

  return (
    <section id="profile" className={`py-20 ${themeClasses.background.navbar} transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <ProfileAvatar />
          <h2 className={`text-3xl font-bold ${themeClasses.text.primary} mb-6 transition-colors duration-300`}>
            {profileData.firstName} {profileData.lastName}
          </h2>
          <p className={`text-xl ${themeClasses.text.secondary} mb-4 transition-colors duration-300`}>
            {profileData.title}
          </p>
          <p className={`${themeClasses.text.secondary} max-w-2xl mx-auto leading-relaxed transition-colors duration-300`}>
            {profileData.bio}
          </p>
          
          <div className="mt-8 flex justify-center space-x-4">
            {Object.entries(profileData.social).map(([platform, url]) => (
              <motion.a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${themeClasses.text.secondary} hover:text-white transition-colors duration-300`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">{platform}</span>
                {platform === 'github' && (
                  <svg className="w-6 h-6" fill={themeClasses.text.primary} viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                )}
                {platform === 'linkedin' && (
                  <svg className="w-6 h-6" fill={themeClasses.text.primary} viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )}
                {platform === 'twitter' && (
                  <svg className="w-6 h-6" fill={themeClasses.text.primary} viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;