import "./Profile.css";

function Profile({ name, email }) {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {name}!</h1>
      <form className="profile__form">
        <label className="profile__input-container">
          <span className="profile__input-name">Имя</span>
          <input
            type="text"
            className="profile__input-value"
            placeholder={name}
          />
          <span className="profile__error-validation profile__error-validation_active" id="validation-name-error">
            Текст ошибки
          </span>
        </label>
        <label className="profile__input-container">
          <span className="profile__input-name">E-mail</span>
          <input
            type="text"
            className="profile__input-value"
            placeholder={email}
          />
          <span className="profile__error-validation profile__error-validation_active" id="validation-email-error">
            Текст ошибки
          </span>
        </label>
        <div className="profile__button-container">
          <button className="profile__edit-button" type="button">
            Редактировать
          </button>
          <button className="profile__exit-button" type="button">
            Выйти из аккаунта
          </button>
          {/* <span className="profile__warning-error">При обновлении профиля произошла ошибка.</span>
          <button className="profile__save-button" type="submit" disabled>Сохранить</button> */}
        </div>
      </form>
    </section>
  );
}

export default Profile;
