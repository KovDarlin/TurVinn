import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './ExcursionDetail.css';

const ExcursionDetail = () => {
  const { route } = useParams();
  const [excursion, setExcursion] = useState<any>(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/excursions/${route}`)
      .then(res => setExcursion(res.data))
      .catch(err => console.error(err));
  }, [route]);

  if (!excursion) return <p>Завантаження...</p>;

  return (
    <main className="excursion-detail">
      <h2>{excursion.title}</h2>
      <img src={excursion.imageUrl} alt={excursion.title} />
      <p>{excursion.details}</p>

      {/* Додатково: поле для коментарів */}
      <div className="comments-section">
        <h3>Залишити коментар:</h3>
        <textarea placeholder="Ваш коментар..."></textarea>
        <button>Надіслати</button>
      </div>
    </main>
  );
};

export default ExcursionDetail;
