import "./AboutMe.css";
import photo from "../../images/photo.jpg";

function AboutMe() {
  return (
    <section className="aboutme" id="student">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__general-container">
        <div className="aboutme__info-container">
          <div>
            <h3 className="aboutme__name">Мария</h3>
            <p className="aboutme__profession">Фронтенд-разработчик, 31 год</p>
            <p className="aboutme__text">
              Я родилась и живу в Зеленограде, закончила факультет ветеринарии
              МГАВМиБ. У меня есть муж и два сына. С 2016 года нахожусь в
              декрете. Я люблю играть в компьютерные игры, а ещё увлекаюсь
              финансами. Недавно опять начала разрабатывать сайты, как когда-то
              давно в школе. После того, как прошла курс по веб-разработке,
              окончательно поняла что это "мое" и записалась на курсы миддл
              разработчика, для дальнейшего получения опыта и навыков.
            </p>
          </div>
          <a
            className="aboutme__link"
            href="https://github.com/Smolib"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="aboutme__photo" src={photo} alt="Фотография" />
      </div>
    </section>
  );
}

export default AboutMe;
