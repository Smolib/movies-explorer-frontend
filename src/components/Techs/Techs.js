import "./Techs.css";

function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="techs__wrapper">
        <h2 className="techs__title">Технологии</h2>
        <h3 className="techs__name">7 технологий</h3>
        <p className="techs__text">
          На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые
          применили в&nbsp;дипломном проекте.
        </p>
        <div className="techs__container">
          <div className="techs__tech">
            <span>HTML</span>
          </div>
          <div className="techs__tech">
            <span>CSS</span>
          </div>
          <div className="techs__tech">
            <span>JS</span>
          </div>
          <div className="techs__tech">
            <span>React</span>
          </div>
          <div className="techs__tech">
            <span>Git</span>
          </div>
          <div className="techs__tech">
            <span>Express.js</span>
          </div>
          <div className="techs__tech">
            <span>mongoDB</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Techs;
