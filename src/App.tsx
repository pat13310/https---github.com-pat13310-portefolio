import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <div className="bg-gray-900 min-h-screen">
        <Navbar />
        <main>
          <Profile />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
