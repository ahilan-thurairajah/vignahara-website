interface ProjectProps {
  name: string;
  location: string;
  description: string;
  status: string;
  highlights: string[];
}

export function ProjectShowcase({ name, location, description, status, highlights }: ProjectProps) {
  return (
    <div className="project-showcase">
      <div className="project-content">
        <div className="project-badge">{status}</div>
        <h2>{name}</h2>
        <h4 className="location-text">{location}</h4>
        <p className="project-description">{description}</p>
        <div className="project-highlights">
          <h5>Key Features</h5>
          <ul>
            {highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
