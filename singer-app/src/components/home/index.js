import React from "react";
import headerImage from "../../assets/header-image.jpg";
import profilePhoto from "../../assets/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles["content-wrapper"]}>
      <div
        className={`${styles["header-container"]} d-flex flex-row position-relative`}
      >
        <h2 className={`${styles.title} position-absolute`}>
          Я піснею планету оповив!
        </h2>
        <img
          src={headerImage}
          className={styles["header-image"]}
          alt="headerImage"
        />
      </div>
      <div className="features d-flex bd-highlight flex-wrap flex-lg-nowrap flex-xl-nowrap justify-content-center flex-row mt-4 p-5">
        <div className="feature-item d-flex flex-column p-4 text-justify">
          <h4 className="align-self-center">
            <FontAwesomeIcon icon="microphone-alt" className="mr-2" />
            КОНЦЕРТИ
          </h4>
          <p>
            Концертна діяльність – це моє життя. Без перебільшень. Сцена,
            глядач, пісня – донести пережите, осмислене, важливе, подарувати
            гарний настрій, емоції, розважити Вас.
          </p>
        </div>
        <div className="feature-item d-flex flex-column p-4 text-justify">
          <h4 className="align-self-center">
            <FontAwesomeIcon icon="bomb" className="mr-2" />
            КОРПОРАТИВИ
          </h4>
          <p>
            Прикрасити Ваше свято своїм виступом, задати веселого настрою,
            порадувати знайомими піснями, особисто привітати з урочистою подією.
          </p>
        </div>
        <div className="feature-item d-flex flex-column p-4 text-justify">
          <h4 className="align-self-center">
            <FontAwesomeIcon icon="plane" className="mr-2" />
            ГАСТРОЛІ/ТУРНЕ
          </h4>
          <p>
            Українська пісня надзвичайно мелодійна і продовжує підкорювати світ.
            Подати її у найкращому вигляді, від серця до серця, одна з головних
            цілей моєї діяльності.
          </p>
        </div>
      </div>
      <div
        className={`${styles.aboutContainer} d-flex flex-wrap flex-lg-nowrap flex-xl-nowrap flex-row p-lg-5 bg-secondary text-white`}
      >
        <div className="m-auto">
          <img
            src={profilePhoto}
            className={`${styles["profile-image"]} img-fluid`}
            alt="profile"
          />
        </div>
        <div className="p-4">
          <h3>ПРО МЕНЕ</h3>
          <p className="text-justify">
            Мене звати Іван Попович. Я артист. Дякую Богу за своє покликання,
            ціную увагу та довіру глядача, вибагливо ставлюсь до постановки
            виступів, програми. Живу творчим життям, пісня чекає на мене у
            повсякденному русі, серед зустрічей, справ, дзвінків та подорожей.
            Часом, не відходить від мене доки не буде перетворена на слова і
            музику і не донесена до людей. Народився я 22 квітня 1949 року в
            селі Осій Іршавського району Закарпатської області. У 1967 році
            закінчив Хустське культурно-просвітнє училище за фахом “диригент
            хору”. Навчаючись в Львівській консерваторії, до якої поступив 1970
            року, в 1973 р. став лауреатом Х Всесвітнього фестивалю молоді в
            Берліні. Отримав диплом диригента. Ще під час навчання в
            консерваторії співав з різноманітними співаками і колективами; в
            1976 році разом з Віктором Морозовим створив ВІА “Ровесник”. Через
            рік ансамбль запросили до філармонії на місце “Ватри”, і йго
            візиткою стала пісня “Люба-Люба”. У 1979 році я створив в Ужгороді
            разом з Русланом Іщуком новий ВІА – “Закарпаття”. З 1982 року
            працював у Київському державному мюзик-холі. У 1987 році став
            солістом Театру естради з ефіру не зникали “Карпатське весілля”,
            “Василина”, “Розлук не буде”, “Мене радує світ”. У 1990 році
            присвоєне звання “Народний артист України”. У 1999 році за особистий
            внесок у розвиток української культури та вагомі творчі здобутки
            нагороджено орденом “За заслуги” ІІІ ступеня. З 2005 року – художній
            керівник Державної театрально-видовищної агенції. Гастролював у
            різних куточках світу – Канаді, Індії, Бразилії, Італії, Греції, США
            та ін. Репертуар – це не лише твори на тему Карпат (“Гуцулянка”,
            “Карпатський край”, “Верховиночка”, “Закарпаття моє”, гуцульські
            народні пісні), а й лірика – “Розлук не буде”, “Скажи мені”,
            “Осінь”, “Чи буде так, що ти мене зречешся” та ін.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
