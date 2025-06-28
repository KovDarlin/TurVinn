import React from 'react';

import './Home.css';


const Home = () => {
  return (
    
     <main>
      <div className="container" style={{ backgroundImage: 'url(/images/main-baner.jpg)' }}>
        <h1 className="title">Вінниччина</h1>
        <h1 className="title title-large">Подорожуй віртуально — закохайся по-справжньому!</h1>

        <div id="img-1" className="img-container">
          <img className="img" src="https://ukrinfo-data.s3.amazonaws.com/media/filebrowser/2025-04-23t124459549z-sakur-045.jpg" alt="img-1" />
        </div>

        <div className="img-container second-animation">
          <img className="img" src="https://img.lunstatic.net/building-2028x1140/69067.jpg.webp" alt="img-2" />
        </div>

        <div className="img-container third-animation">
          <img className="img" src="https://zabytki.in.ua/images/4657.jpg" alt="img-3" />
        </div>

        <div className="img-container fourth-animation">
          <img className="img nba" src="https://www.kyiv-dialogue.org/files/KIEV_DIALOGUE/FOTOS/2021/Winnyzja/F70B1211.jpg" alt="img-4" />
        </div>

        <div className="img-container fifth-animation">
          <img className="img" src="https://f.discover.ua/photo/2491/q2lDH.jpg" alt="img-5" />
        </div>

      </div>

      <section className="image-grid">
      <div className="grid-item">
        <img src="/images/new-img.webp" alt="Фото 1" />
      </div>
      <div className="grid-item">
        <img src="/images/img-2.jpg" alt="Фото 2" />
      </div>
      <div className="grid-item">
        <img src="/images/img-3.jpg" alt="Фото 3" />
      </div>
      <div className="grid-item">
        <img src="/images/img-4.jpg" alt="Фото 4" />
      </div>
      <div className="grid-item">
        <img src="/images/img-5.jpg" alt="Фото 5" />
      </div>
      <div className="grid-item">
        <img src="/images/img-6.jpg" alt="Фото 6" />
      </div>
    </section>


      <section className="about-vinnytsia">
      <h2>Вас вітає команда TurVinn!</h2>
      <p>Наша креативна команда створила цей сайт, аби подарувати вам унікальну можливість — віртуально подорожувати Вінниччиною.</p>
      <p>Це більше, ніж туристичний портал — це справжній гід сучасного мандрівника. Тут ви знайдете історичні факти, легенди, фото, маршрути та живу атмосферу Поділля. Ми об'єднали культуру, архітектуру, природу та сучасні технології в одному просторі.</p>
      
      
      <p>Віртуальна екскурсія — це лише перший крок до реальної подорожі нашими містами й селами. Ми зібрали найцікавіші замки, музеї, храми, парки та культурні події регіону. Пишаємося тим, що показуємо Вінниччину такою, якою її бачимо ми — теплою, щирою, натхненною.</p>
      <p>Запрошуємо вас у подорож сторінками нашого ресурсу — кожна з них відкриває щось нове. Нехай цифрова подорож стане натхненням для справжнього візиту до Вінниччини.</p>
      <p></p>
      <p>Дякуємо, що обрали нас — ваш віртуальний провідник Поділлям!</p>
    </section>

      <div className="audio-gallery-wrapper">
        <audio controls>
          <source src="/audio/first.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="audio-caption">
            На сайті є аудіо, що відповідають тексту. Ви можете читати або прослуховувати текст.
      </p>
        </div>
      
      <section className="about-vinnytsia">
      <h2>Вінницька область — край історії, культури та сучасності</h2>

      <p>
        Вінницька область — це серце Поділля, край із багатою історією, унікальними архітектурними пам’ятками
        та мальовничими природними ландшафтами. Територія регіону охоплює понад 26 тисяч квадратних кілометрів
        і налічує понад 1,5 мільйона мешканців.
      </p>

      <p>
        У Вінниччині збереглося понад 30 історичних замків, садиб та фортифікаційних споруд, зокрема —
        Палац Грохольських-Можайських у Вороновиці, Палац Потоцьких у Тульчині, Палац княгині Марії Щербатової
        та інші. Багато з них датуються XVII–XIX століттями і є свідками подільської шляхетської культури.
      </p>

      <p>
        Область відома унікальними музеями, зокрема Музеєм Пирогова та Автомотовелофототелерадіо музеєм, а також
        найбільшим в Україні діючим фонтаном "ROSHEN" на Південному Бузі. Це світломузичне шоу щороку приваблює
        тисячі туристів.
      </p>

      <p>
        Вінниччина має також потужний промисловий потенціал — тут працюють десятки сучасних заводів і підприємств,
        серед яких завод з виробництва електроніки HEAD, підприємства харчової та переробної промисловості, а також
        сучасні аграрні комплекси.
      </p>

      <p>
        Для поціновувачів природи відкриті регіональні ландшафтні парки, ботанічні пам’ятки, річки та озера.
        
      </p>
    </section>

    <div className="audio-gallery-wrapper">
       
        <div className="carousel">
          <img src="/images/horoh.webp" alt="1" />
          <img src="/images/Poto.jpg" alt="2" />
          <img src="/images/nemur.jpeg" alt="3" />
        </div>
     
    </div>
    </main>
  );
};

export default Home;
