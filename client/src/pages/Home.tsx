import { HeroSlideshow } from '../components/HeroSlideshow'

function Home() {
  return (
    <div className="container">
      <HeroSlideshow />

      <section style={{ textAlign: 'center', padding: '2rem 0' }}>
        <h2>Our Mission</h2>
        <p>Providing financially feasible, socially responsible, and environmentally friendly housing solutions in Ontario.</p>
      </section>
    </div>
  )
}

export default Home
