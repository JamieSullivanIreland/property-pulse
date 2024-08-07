'use client';

import PropertyCard from '@/components/PropertyCard';
import Spinner from '@/components/Spinner';
import { useEffect, useState } from 'react';

const SavedPropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedProperties = async () => {
      try {
        const res = await fetch(`/api/bookmarks`);

        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        } else {
          console.log(res.statusText);
          toast.error('Failed to fetch');
        }
      } catch (error) {
        console.log(error);
        toast.error('Failed to fetch');
      } finally {
        setLoading(false);
      }
    };

    fetchSavedProperties();
  }, []);

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <section className='px-4 py-6'>
      <h1 className='text-2xl mb-4'>Saved properties</h1>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {properties.map((property) => (
              <PropertyCard
                key={property._id}
                property={property}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SavedPropertiesPage;
