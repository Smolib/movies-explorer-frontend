import "./AuthForm.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function AuthForm({
  title,
  needName,
  textButton,
  textBottom,
  linkBottom,
  linkText,
}) {
  return (
    <section className="authform">
      <Link to="/">
        <img className="authform__logo" src={logo} alt="Лого" />
      </Link>
      <h1 className="authform__title">{title}</h1>
      <form className="authform__form">
        <div className="authform__inputs-container">
          {needName ? (
            <label className="authform__input-container">
              <span className="authform__input-name">Имя</span>
              <input
                type="text"
                className="authform__input-value"
                placeholder="Введите имя"
              />
              <span
                className="authform__error-validation authform__error-validation_active"
                id="validation-name-error"
              >
                Текст ошибки 1
              </span>
            </label>
          ) : (
            ""
          )}
          <label className="authform__input-container">
            <span className="authform__input-name">E-mail</span>
            <input
              type="text"
              className="authform__input-value"
              placeholder="Введите e-mail"
            />
            <span
              className="authform__error-validation"
              id="validation-email-error"
            >
              Текст ошибки 2
            </span>
          </label>
          <label className="authform__input-container">
            <span className="authform__input-name">Пароль</span>
            <input
              type="password"
              className="authform__input-value"
              placeholder="Введите пароль"
            />
            <span
              className="authform__error-validation"
              id="validation-password-error"
            >
              Текст ошибки 3
            </span>
          </label>
        </div>
        <button className="authform__save-button" type="submit">
          {textButton}
        </button>
        <p className="authform__text-bottom">
          {textBottom}
          <Link
            className="authform__link-bottom"
            to={linkBottom}
          >{` ${linkText}`}</Link>
        </p>
      </form>
    </section>
  );
}

export default AuthForm;
