import "./AuthForm.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useState } from "react";

function AuthForm({
  title,
  needName,
  textButton,
  textBottom,
  linkBottom,
  linkText,
  onSubmit,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };
    onSubmit(data);
  }

  function handleOnChangeInputName(e) {
    setName(e.target.value);
  }
  function handleOnChangeInputEmail(e) {
    setEmail(e.target.value);
  }
  function handleOnChangeInputPassword(e) {
    setPassword(e.target.value);
  }
  return (
    <section className="authform">
      <Link to="/">
        <img className="authform__logo" src={logo} alt="Лого" />
      </Link>
      <h1 className="authform__title">{title}</h1>
      <form className="authform__form" onSubmit={handleOnSubmit}>
        <div className="authform__inputs-container">
          {needName ? (
            <label className="authform__input-container">
              <span className="authform__input-name">Имя</span>
              <input
                value={name}
                onChange={handleOnChangeInputName}
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
              value={email}
              onChange={handleOnChangeInputEmail}
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
              value={password}
              onChange={handleOnChangeInputPassword}
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
