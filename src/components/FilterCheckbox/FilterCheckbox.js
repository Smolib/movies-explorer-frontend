import "./FilterCheckbox.css";

function FilterCheckbox() {
    return (
      <div className="checkbox">
        <label className="checkbox__container">
          <input type="checkbox" />
          <span className="checkbox__slider"></span>
          <span className="checkbox__name">Короткометражки</span>
        </label>
      </div>
    );
  }
  
  export default FilterCheckbox;