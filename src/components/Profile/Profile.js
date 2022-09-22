import "./Profile.css";
import { mainApi } from "../../utils/MainApi";
import { useState, useEffect } from "react";

function Profile({ name, email, onExitButton, isUserChecked }) {
  const [switchForEdit, setSwitchForEdit] = useState(false);
  const [nameOfUser, setNameOfUser] = useState("");
  const [emailOfUser, setEmailOfUser] = useState("");

  const [errorInputName, setErrorInputName] = useState({
    isValid: true,
    errorMessage: "",
  });
  const [isUserUseInputName, setIsUserUseInputName] = useState(false);

  const [errorInputEmail, setErrorInputEmail] = useState({
    isValid: true,
    errorMessage: "",
  });
  const [isUserUseInputEmail, setIsUserUseInputEmail] = useState(false);
  const [canSubmit, setCanSubmit] = useState(true);
  const [errorUpdate, setErrorUpdate] = useState(false);

  useEffect(() => {
    setNameOfUser(name ? name : "");
    setEmailOfUser(email ? email : "");
  }, [name, email]);

  useEffect(() => {
    setCanSubmit(errorInputName.isValid && errorInputEmail.isValid);
  }, [errorInputName, errorInputEmail]);

  function handleOnChangeInputName(e) {
    setNameOfUser(e.target.value);
    setIsUserUseInputName(true);
    setErrorInputName({
      isValid: e.target.validity.valid,
      errorMessage: e.target.validationMessage,
    });
  }
  function handleOnChangeInputEmail(e) {
    setEmailOfUser(e.target.value);
    setIsUserUseInputEmail(true);
    setErrorInputEmail({
      isValid: e.target.validity.valid,
      errorMessage: e.target.validationMessage,
    });
  }
  function handleEditButton() {
    setSwitchForEdit(true);
  }

  function handleSaveButton(e) {
    setErrorUpdate(false);
    e.preventDefault();
    mainApi
      .patchUserInfo({ name: nameOfUser, email: emailOfUser })
      .then(() => {
        setSwitchForEdit(false);
        setErrorUpdate(false);
      })
      .catch(() => setErrorUpdate(true));
  }

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {name}!</h1>
      <form className="profile__form" onSubmit={handleSaveButton}>
        <label className="profile__input-container">
          <span className="profile__input-name">Имя</span>
          <input
            value={nameOfUser}
            onChange={handleOnChangeInputName}
            type="text"
            min="2"
            max="30"
            pattern="^[\\sa-zA-Zа-яА-ЯёЁ-]+$"
            className="profile__input-value"
            placeholder={name}
            disabled={!switchForEdit}
            required
          />
          <span
            className={`profile__error-validation ${
              !errorInputName.isValid ? " profile__error-validation_active" : ""
            }`}
            id="validation-name-error"
          >
            {isUserUseInputName
              ? "Имя может содержать только буквы, пробел или дефис."
              : ""}
          </span>
        </label>
        <label className="profile__input-container">
          <span className="profile__input-name">E-mail</span>
          <input
            value={emailOfUser}
            onChange={handleOnChangeInputEmail}
            pattern="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$"
            className="profile__input-value"
            placeholder={email}
            disabled={!switchForEdit}
            required
          />
          <span
            className={`profile__error-validation ${
              !errorInputEmail.isValid
                ? " profile__error-validation_active"
                : ""
            }`}
            id="validation-email-error"
          >
            {isUserUseInputEmail ? "Введите корректный e-mail" : ""}
          </span>
        </label>
        <div className="profile__button-container">
          {!switchForEdit ? (
            <>
              <button
                className="profile__edit-button"
                type="button"
                onClick={handleEditButton}
              >
                Редактировать
              </button>
              <button
                className="profile__exit-button"
                type="button"
                onClick={onExitButton}
              >
                Выйти из аккаунта
              </button>{" "}
            </>
          ) : (
            ""
          )}
          {switchForEdit ? (
            <>
              {errorUpdate ? (
                <span className="profile__warning-error">
                  При обновлении профиля произошла ошибка.
                </span>
              ) : (
                ""
              )}
              <button
                className="profile__save-button"
                type="submit"
                disabled={!canSubmit}
              >
                Сохранить
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </form>
    </section>
  );
}

export default Profile;
