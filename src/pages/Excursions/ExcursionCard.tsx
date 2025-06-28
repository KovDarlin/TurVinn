import './ExcursionCard.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface ExcursionCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  route: string;
  isAuthenticated: boolean;
}

const ExcursionCard = ({ id, title, description, imageUrl, route, isAuthenticated }: ExcursionCardProps) => {
  const navigate = useNavigate();

  const handleStart = async () => {
    if (!isAuthenticated) {
      alert("Будь ласка, увійдіть у профіль");
      navigate("/login");
    } else {
      const userEmail = localStorage.getItem("userEmail");

      try {
        await axios.post("http://localhost:3001/api/passed", {
          userEmail,
          excursionId: id
        });
      } catch (err) {
        console.error("Не вдалося зберегти екскурсію", err);
      }

      navigate(`/excursions/${route}`);
    }
  };

  return (
    <div className="excursion-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleStart}>Почати</button>
    </div>
  );
};

export default ExcursionCard;





