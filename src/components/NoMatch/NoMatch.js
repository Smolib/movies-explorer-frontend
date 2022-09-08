import "./NoMatch.css";
import { useHistory } from "react-router-dom";

function NoMatch() {
  const history = useHistory();
  return (
    <section className="nomatch">
        <h1 className="nomatch__title">404</h1>
        <p className="nomatch__subtitle">Страница не найдена</p>
        <button onClick={history.goBack} className="nomatch__back">
          Назад
        </button>
    </section>
  );
}

export default NoMatch;
