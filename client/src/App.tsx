import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Properties from './pages/Properties'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <>
      <nav style={{ padding: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link to="/">Home</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
