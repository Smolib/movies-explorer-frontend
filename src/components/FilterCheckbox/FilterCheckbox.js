import { useEffect, useState } from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ handleCheckbox, isShort }) {
  return (
    <div className="checkbox">
      <label className="checkbox__container">
        <input
        onClick={() => handleCheckbox(!isShort)}
          type="checkbox"
          checked={isShort}
          onChange={()=>{}}
        />
        <span className="checkbox__slider"></span>
        <span className="checkbox__name">Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
