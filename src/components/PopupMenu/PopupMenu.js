import { NavLink } from "react-router-dom";
import "./PopupMenu.css";

function PopupMenu({ links, onCloseMenu, isPopupMenuOpen }) {
  return (
    <>
      {isPopupMenuOpen ? (
        <div className="popup-menu">
          <div className="popup-menu__wrapper">
            <button className="popup-menu__close-button" onClick={onCloseMenu}></button>
            <nav>
              <ul className="popup-menu__list">
                <li className="popup-menu__item">
                  <NavLink to="/" className="popup-menu__link" exact>
                    Главная
                  </NavLink>
                </li>
                {links.map((item, i) => (
                  <li key={i} className="popup-menu__item">
                    <NavLink to={item.link} className="popup-menu__link">
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <button className="popup-menu__account-button">Аккаунт</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default PopupMenu;
