interface PropertyProps {
  name: string;
  location: string;
  description: string;
  units?: number;
}

export function PropertyCard({ name, location, description, units }: PropertyProps) {
  return (
    <div className="property-card">
      <div className="property-header">
        <h3>{name}</h3>
        <span className="location-tag">{location}</span>
      </div>
      <p>{description}</p>
      {units && <p className="units-info"><strong>Units:</strong> {units}</p>}
    </div>
  )
}
