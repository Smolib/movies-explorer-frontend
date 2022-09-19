import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState } from "react";

function SearchForm({ handleSubmitSearch, handleCheckbox }) {
  const [keyWord, setKeyWord] = useState("");

  function handleOnChangeInputKeyWord(e) {
    setKeyWord(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    handleSubmitSearch(keyWord);
  }
  return (
    <section className="search">
      <div className="search__wrapper">
        <div className="search__search-container">
          <div className="search__icon"></div>
          <form
            className="search__form"
            name="search"
            noValidate
            onSubmit={onSubmit}
          >
            <input
              value={keyWord}
              className="search__input"
              type="text"
              name="Поиск"
              placeholder="Фильм"
              minLength="2"
              maxLength="40"
              required
              onChange={handleOnChangeInputKeyWord}
            />
            <button className="search__submit" type="submit">
              Найти
            </button>
          </form>
        </div>
        <FilterCheckbox handleCheckbox={handleCheckbox} />
      </div>
    </section>
  );
}

export default SearchForm;
