import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__description-container">
        <div>
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h3 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__diagram-container">
        <div className="about-project__diagram-line about-project__diagram-line_black">
          <span>1 неделя</span>
        </div>
        <div className="about-project__diagram-line about-project__diagram-line_gray">
          <span>4 недели</span>
        </div>
        <p className="about-project__diagram-description">Back-end</p>
        <p className="about-project__diagram-description">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
