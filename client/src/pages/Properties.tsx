import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { PropertyCard } from '../components/PropertyCard'

function Properties() {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
	const fetchProperties = async () => {
	  try {
		const querySnapshot = await getDocs(collection(db, "properties"));
		const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
		setProperties(data);
	  } catch (error) {
		console.error("Error fetching properties:", error);
	  } finally {
		setLoading(false);
	  }
	};
	fetchProperties();
  }, []);

  if (loading) {
	return (
	  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem', textAlign: 'center' }}>
		<p>Loading properties...</p>
	  </div>
	);
  }

  return (
	<div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
	  <h1>Rental Properties</h1>
	  <p style={{ marginBottom: '2rem' }}>
		Vignahara Inc. manages a diverse portfolio of residential rental properties,
		prioritizing tenant satisfaction and environmental responsibility.
	  </p>

	  <div className="property-grid">
		{properties.map((property) => (
		  <PropertyCard key={property.id} {...property} />
		))}
		{properties.length === 0 && <p>No properties found.</p>}
	  </div>
	</div>
  )
}

export default Properties
