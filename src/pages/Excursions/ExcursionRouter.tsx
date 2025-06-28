// src/pages/Excursions/ExcursionRouter.tsx
import { useParams } from 'react-router-dom';
import FountainTour from './FountainTour';
import PirogovMuseum from './PirogovMuseum';
import OzeroVush from './OzeroVush';

const ExcursionRouter = () => {
  const { route } = useParams();

  switch (route) {
    case 'fountain':
      return <FountainTour />;
    case 'pirogov':
      return <PirogovMuseum />;
    case 'ozero':
      return <OzeroVush />;
    default:
      return <div>Екскурсію не знайдено</div>;
  }
};

export default ExcursionRouter;
