import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { getThemeClasses } from '../utils/theme';

const Contact = () => {
  const { currentTheme, getGradientByTheme } = useTheme();
  const gradientClasses = getGradientByTheme(currentTheme);
  const themeClasses = getThemeClasses(currentTheme);
  
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=4.813970,43.638160,4.813970,43.640160&layer=mapnik&marker=43.63916,4.81397`;

  return (
    <section id="contact" className={`min-h-screen ${themeClasses.background.navbar} py-20 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl font-bold ${themeClasses.text.primary} mb-8 relative inline-block pb-2`}>
            Me Contacter
            <div className={`absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r ${gradientClasses}`} />
          </h2>
          <p className={`${themeClasses.text.secondary} max-w-2xl mx-auto mb-8`}>
            N'hésitez pas à me contacter pour discuter de vos projets ou pour toute autre question.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`${themeClasses.background.dropdown} p-6 rounded-2xl shadow-lg h-full transition-colors duration-300`}
          >
            <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-6`}>
              Mes Coordonnées
            </h3>
            <div className="space-y-5">
              <div className="flex items-start space-x-3">
                <div className={`flex-shrink-0 w-12 h-12 ${themeClasses.background.button} rounded-xl flex items-center justify-center relative transition-colors duration-300`}>
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></span>
                </div>
                <div>
                  <h4 className={`text-left text-sm font-medium ${themeClasses.text.primary} mb-1`}>
                    Adresse
                  </h4>
                  <div className={`text-xs ${themeClasses.text.secondary} space-y-0.5`}>
                    <p className="hover:text-blue-400 transition-colors cursor-pointer">5 rue de la Laure, 13310 St Martin de Crau</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className={`flex-shrink-0 w-12 h-12 ${themeClasses.background.button} rounded-xl flex items-center justify-center transition-colors duration-300`}>
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`text-left text-sm font-medium ${themeClasses.text.primary} mb-1`}>
                    Email
                  </h4>
                  <a href="mailto:xenatronics@gmx.fr" className={`text-xs ${themeClasses.text.secondary} hover:text-blue-400 transition-colors`}>
                    xenatronics@gmx.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className={`flex-shrink-0 w-12 h-12 ${themeClasses.background.button} rounded-xl flex items-center justify-center transition-colors duration-300`}>
                  <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <h4 className={`text-left text-sm font-medium ${themeClasses.text.primary} mb-1`}>
                    LinkedIn
                  </h4>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className={`text-xs ${themeClasses.text.secondary} hover:text-blue-400 transition-colors`}>
                    Voir mon profil
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className={`flex-shrink-0 w-12 h-12 ${themeClasses.background.button} rounded-xl flex items-center justify-center transition-colors duration-300`}>
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className={`text-left text-sm font-medium ${themeClasses.text.primary} mb-1`}>
                    GitHub
                  </h4>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className={`text-xs ${themeClasses.text.secondary} hover:text-blue-400 transition-colors`}>
                    Voir mes projets
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`${themeClasses.background.dropdown} p-8 rounded-2xl shadow-lg transition-colors duration-300`}
          >
            <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-6 text-center`}>
              Votre message
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium ${themeClasses.text.primary} mb-2`}>
                  Votre nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full px-4 py-3 ${themeClasses.background.button} border border-gray-800 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:ring-current ${themeClasses.text.primary} placeholder-gray-500 transition-colors duration-300`}
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium ${themeClasses.text.primary} mb-2`}>
                  Votre email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full px-4 py-3 ${themeClasses.background.button} border border-gray-800 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:ring-current ${themeClasses.text.primary} placeholder-gray-500 transition-colors duration-300`}
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium ${themeClasses.text.primary} mb-2`}>
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={`w-full px-4 py-3 ${themeClasses.background.button} border border-gray-800 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:ring-current ${themeClasses.text.primary} placeholder-gray-500 transition-colors duration-300`}
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className={`w-full px-6 py-3 bg-gradient-to-r ${gradientClasses} text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300`}
                >
                  Envoyer
                </button>
              </div>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`${themeClasses.background.dropdown} p-6 rounded-2xl shadow-lg h-full transition-colors duration-300`}
          >
            <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-6`}>
              Localisation
            </h3>
            <div className="h-[calc(100%-4rem)] min-h-[300px] rounded-xl overflow-hidden">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                className="rounded-xl"
                title="Carte"
                style={{ minHeight: '300px', filter: 'contrast(1.1) brightness(1.1)' }}
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
