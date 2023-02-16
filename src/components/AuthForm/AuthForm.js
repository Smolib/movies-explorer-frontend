import "./AuthForm.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useState, useEffect } from "react";

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

  const [errorInputName, setErrorInputName] = useState({
    isValid: false,
    errorMessage: "",
  });
  const [isUserUseInputName, setIsUserUseInputName] = useState(false);

  const [errorInputEmail, setErrorInputEmail] = useState({
    isValid: false,
    errorMessage: "",
  });
  const [isUserUseInputEmail, setIsUserUseInputEmail] = useState(false);

  const [errorInputPassword, setErrorInputPassword] = useState({
    isValid: false,
    errorMessage: "",
  });
  const [isUserUseInputPassword, setIsUserUseInputPassword] = useState(false);

  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    setCanSubmit(
      (needName ? errorInputName.isValid : true) &&
        errorInputEmail.isValid &&
        errorInputPassword.isValid
    );
  }, [errorInputName, errorInputEmail, errorInputPassword]);

  function handleOnChangeInputName(e) {
    setName(e.target.value);
    setIsUserUseInputName(true);
    setErrorInputName({
      isValid: e.target.validity.valid,
      errorMessage: e.target.validationMessage,
    });
  }
  function handleOnChangeInputEmail(e) {
    setEmail(e.target.value);
    setIsUserUseInputEmail(true);
    setErrorInputEmail({
      isValid: e.target.validity.valid,
      errorMessage: e.target.validationMessage,
    });
  }

  function handleOnChangeInputPassword(e) {
    setPassword(e.target.value);
    setIsUserUseInputPassword(true);
    setErrorInputPassword({
      isValid: e.target.validity.valid,
      errorMessage: e.target.validationMessage,
    });
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };
    onSubmit(data);
  }

  return (
    <section className="authform">
      <Link to="/">
        <img className="authform__logo" src={logo} alt="Лого" />
      </Link>
      <h1 className="authform__title">{title}</h1>
      <form className="authform__form" onSubmit={handleOnSubmit} noValidate>
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
                min="2"
                max="30"
                pattern="^[\\sa-zA-Zа-яА-ЯёЁ-]+$"
                required
              />
              <span
                className={`authform__error-validation ${
                  !errorInputName.isValid
                    ? " authform__error-validation_active "
                    : ""
                }`}
              >
                {isUserUseInputName
                  ? "Введите имя. Оно может содержать только буквы, пробел или дефис."
                  : ""}
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
              className="authform__input-value"
              placeholder="Введите e-mail"
              pattern="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$"
              required
            />
            <span
              className={`authform__error-validation ${
                !errorInputEmail.isValid
                  ? " authform__error-validation_active "
                  : ""
              }`}
            >
              {isUserUseInputEmail ? "Введите корректный e-mail" : ""}
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
              required
            />
            <span
              className={`authform__error-validation ${
                !errorInputPassword.isValid
                  ? " authform__error-validation_active "
                  : ""
              }`}
            >
              {isUserUseInputPassword ? "Придумайте надежный пароль" : ""}
            </span>
          </label>
        </div>
        <button
          className="authform__save-button"
          type="submit"
          disabled={!canSubmit}
        >
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
