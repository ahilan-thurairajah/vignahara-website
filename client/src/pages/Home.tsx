import { HeroSlideshow } from '../components/HeroSlideshow'

function Home() {
  return (
    <div className="container">
      <HeroSlideshow />
      <div className="trust-row" aria-hidden>
        <div className="trust-item">Net-zero aligned projects</div>
        <div className="trust-item">Trusted by community partners</div>
        <div className="trust-item">AI-assisted modelling for efficiency</div>
      </div>

      <section className="value-section">
        <h2 className="value-heading">Delivering Value Across the Housing Ecosystem</h2>

        <div className="value-grid">
          <article className="value-card">
            <span className="value-card__tag">Investors</span>
            <h3>Long-Term ESG Value Creation</h3>
            <p>
              We focus on energy-efficient, future-ready assets 
              designed to reduce operating costs, support long-term value, 
              and contribute to durable financial performance.
            </p>
          </article>

          <article className="value-card">
            <span className="value-card__tag">Partners</span>
            <h3>Collaborative Proptech Innovation</h3>
            <p>
              We streamline development pipelines through advanced building 
              science and AI-driven tools. Together with our partners, 
              we support scalable co-development backed by shared data, 
              faster planning, and more efficient delivery.
            </p>
          </article>

          <article className="value-card">
            <span className="value-card__tag">Government</span>
            <h3>Aligning with Public Mandates</h3>
            <p>
              We support Ontario’s housing goals by helping address supply 
              shortages while aligning with net-zero targets. Our projects 
              are designed to deliver socially responsible community assets 
              that support public priorities and long-term regional resilience.
            </p>
          </article>
        </div>
      </section>

      <section className="pillars-section">
        <h2 className="pillars-heading">Pillars of Transformation: Driven by Purpose</h2>

        <div className="pillars-grid">
          <article className="pillar-card">
            <h3>Thriving, Inclusive Neighborhoods</h3>
            <p>
              We design for social stability and human connection, creating 
              multi-generational spaces where families, seniors, and newcomers 
              can belong. Every development is built to strengthen the local social fabric 
              and support communities that endure for generations.
            </p>
          </article>

          <article className="pillar-card">
            <h3>Preservation Through Conscious Design</h3>
            <p>
              We integrate conservation into our projects through low-carbon 
              materials, smart energy systems, and water-efficient design. 
              Our goal is to build in harmony with the land while protecting 
              natural ecosystems and delivering resilient, future-ready homes.              
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Home
