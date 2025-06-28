import './Profile.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Excursion {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  route: string;
}

const Profile = () => {
  const [passedExcursions, setPassedExcursions] = useState<Excursion[]>([]);
  const email = localStorage.getItem("email");

  useEffect(() => {
    if (email) {
      axios.get(`http://localhost:3001/api/passed/${email}`)
        .then(res => setPassedExcursions(res.data))
        .catch(err => console.error("Помилка при завантаженні пройдених екскурсій:", err));
    }
  }, [email]);

  return (
    <div className="app-container">
      <div className="app-image">
        <img src="/images/2.jpg" alt="Екран застосунку" />
      </div>
      <div className="app-text">
  <h1>Відкрий Вінницю по-новому разом із нашим мобільним застосунком!</h1>
  <p>
    ✅ Обери свої інтереси: костели, музеї, природа, кафе та ще десятки варіантів.<br/>
    ✅ Отримай персональний маршрут містом із підказками та сюрпризами.<br/>
    ✅ Заробляй наші веселі бонуси — за відвідані точки.<br/>
    ✅ Обмінюй їх на каву, знижки та сувеніри у внутрішньому магазині.<br/>
  </p>
  <p className="extra-text">
    🌟 Зроби свою подорож у Вінниці незабутньою. Спробуй вже зараз та стань місцевим експертом!
  </p>

  <div className="button-container">
    <a href="https://www.figma.com/design/WRNYuhj5U5bHn1bX6PHlKI/TurVinn?node-id=0-1&p=f" className="demo-button">
      Спробуй демо
    </a>
  </div>
</div>
    </div>
  );
};

export default Profile;
