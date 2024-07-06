import FeaturedProperties from '@/components/FeaturedProperties';
import Hero from '../components/Hero';
import InfoBoxes from '../components/InfoBoxes';
import HomeProperties from '@/components/HomeProperties';

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <FeaturedProperties />
      <HomeProperties />
    </>
  );
};

export default HomePage;
