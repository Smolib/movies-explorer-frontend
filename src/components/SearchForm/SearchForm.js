import "./SearchForm.css";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

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
        <FilterCheckbox/>
      </div>
    </section>
  );
}

export default SearchForm;
