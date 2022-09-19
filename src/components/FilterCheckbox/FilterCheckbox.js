import "./FilterCheckbox.css";

function FilterCheckbox({handleCheckbox}) {
    return (
      <div className="checkbox">
        <label className="checkbox__container">
          <input type="checkbox" onClick={handleCheckbox}/>
          <span className="checkbox__slider"></span>
          <span className="checkbox__name">Короткометражки</span>
        </label>
      </div>
    );
  }
  
  export default FilterCheckbox;