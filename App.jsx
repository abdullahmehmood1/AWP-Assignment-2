import Header from './components/Header'
import Hero from './sections/Hero'
import Gallery from './sections/Gallery'
import Contact from './sections/Contact'
import Footer from './components/Footer'

/**
 * Main App Component
 * Renders all sections of the single page application
 */
function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App