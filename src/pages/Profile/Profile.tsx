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
    <div className="profile-container">
      <div className="profile-card">
        <h1>Вітаємо у вашому кабінеті!</h1>
        <p className="intro-text">
          Дякуємо за реєстрацію у нашому сервісі цифрових екскурсій Вінниччиною.<br />
          Ви стали частиною унікальної подорожі через історію, культуру та сучасність регіону.<br /><br />

          🔹 Вінниця — місто, що існує понад 650 років та зберігає дух Середньовіччя.<br />
          🔹 Тут розташований найстаріший у Східній Європі водонапірний майдан — Вежа Артинова.<br />
          🔹 У Вінниці працює найвідоміший в Україні світломузичний фонтан “ROSHEN”.<br />
          🔹 Саме тут зберігаються документи часів УНР — української незалежності 1917–1921 рр.<br />
          🔹 Поділля — край, багатий на старовинні замки, підземелля та мальовничі ландшафти.<br />
          🔹 В області понад 100 туристичних об'єктів, доступних для дослідження у цифровому форматі.<br />
          🔹 У Вінницькому краєзнавчому музеї зберігається мамонтова кістка віком понад 30 000 років.<br />
          🔹 Тут можна зустріти архітектурні пам’ятки польської, єврейської, української спадщини.<br /><br />

          Дослідження екскурсій відкриється після першого проходження маршруту.<br />
          Бажаємо цікавих відкриттів і приємної подорожі!
        </p>
      </div>
    </div>
  );
};

export default Profile;
