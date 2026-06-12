import vignaharaLogo from '../assets/logo/vignahara_logo.png'
import { HeroSlideshow } from '../components/HeroSlideshow'

function Home() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
      <section id="center" style={{ paddingTop: '2rem' }}>
        <div className="hero">
          <img src={vignaharaLogo} className="logo main-logo" alt="Vignahara logo" />
        </div>
      </section>
      
      <HeroSlideshow />

      <section style={{ textAlign: 'center', padding: '2rem 0' }}>
        <h2>Our Mission</h2>
        <p>Providing financially feasible, socially responsible, and environmentally friendly housing solutions in Ontario.</p>
      </section>
    </div>
  )
}

export default Home
