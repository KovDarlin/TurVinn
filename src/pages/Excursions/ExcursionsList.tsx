import { useEffect, useState } from 'react';
import axios from 'axios';
import ExcursionCard from './ExcursionCard';
import './ExcursionsList.css';

const ExcursionsList = () => {
  const [excursions, setExcursions] = useState([]);
  const isAuthenticated = localStorage.getItem("token") !== null;

  useEffect(() => {
    axios.get("http://localhost:3001/api/excursions")
      .then(res => setExcursions(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <main className="excursions-container">
      <h2>Доступні екскурсії</h2>
      <div className="excursions-grid">
        {excursions.map((exc: any) => (
          <ExcursionCard
            key={exc.id}
            id={exc.id}
            title={exc.title}
            description={exc.description}
            imageUrl={exc.imageUrl}
            route={exc.route}
            isAuthenticated={isAuthenticated}
          />
        ))}
      </div>
    </main>
  );
};

export default ExcursionsList;
