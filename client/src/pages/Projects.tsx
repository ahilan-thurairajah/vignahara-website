import { useState, useEffect } from 'react'
import { collection, getDocs, query, limit } from 'firebase/firestore'
import { db } from '../firebase'
import { ProjectShowcase } from '../components/ProjectShowcase'

function Projects() {
  const [featuredProject, setFeaturedProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const q = query(collection(db, "projects"), limit(1));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          setFeaturedProject({ id: doc.id, ...doc.data() });
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem', textAlign: 'center' }}>
        <p>Loading projects...</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1>Development Projects</h1>
      <p>
        Vignahara Inc. is committed to expanding quality housing solutions through innovative development projects.
      </p>

      {featuredProject ? (
        <ProjectShowcase {...featuredProject} />
      ) : (
        <p style={{ marginTop: '2rem' }}>No featured projects at this time.</p>
      )}

      <section style={{ marginTop: '4rem', padding: '2rem', borderTop: '1px solid var(--border)' }}>
        <h3>Future Initiatives</h3>
        <p>We are actively researching new opportunities for high-density, eco-friendly developments across Ontario.</p>
      </section>
    </div>
  )
}

export default Projects
