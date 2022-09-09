import "./SearchForm.css";
function SearchForm() {
  return (
    <section className="search">
      <div className="search__wrapper">
        <div className="search__search-container">
          <div className="search__icon"></div>
          <form className="search__form" name="search" novalidate>
            <input
              className="search__input"
              type="text"
              name="Поиск"
              placeholder="Фильм"
              minlength="2"
              maxlength="40"
              required
            />
            <button className="search__submit" type="submit">
              Найти
            </button>
          </form>
        </div>
        <div className="search__checkbox-container">
          <label className="search__check-switch">
            <input type="checkbox" />
            <span className="search__check-slider"></span>
            <span className="search__check-name">Короткометражки</span>
          </label>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
