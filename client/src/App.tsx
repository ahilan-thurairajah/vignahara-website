import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Properties from './pages/Properties'
import Projects from './pages/Projects'
import Research from './pages/Research'
import Contact from './pages/Contact'
import { Header } from './components/Header'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
