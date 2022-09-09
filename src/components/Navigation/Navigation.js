import { NavLink } from "react-router-dom";
import "./Navigation.css";

function PopupMenu({ links, onCloseMenu, isPopupMenuOpen }) {
  return (
    <>
      {isPopupMenuOpen ? (
        <div className="navigation">
          <div className="navigation__wrapper">
            <button
              type="button"
              className="navigation__close-button"
              onClick={onCloseMenu}
            ></button>
            <nav>
              <ul className="navigation__list">
                <li className="navigation__item">
                  <NavLink to="/" className="navigation__link" exact>
                    Главная
                  </NavLink>
                </li>
                {links.map((item, i) => (
                  <li key={i} className="navigation__item">
                    <NavLink to={item.link} className="navigation__link">
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <button type="button" className="navigation__account-button">
              Аккаунт
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default PopupMenu;
