import "./Header.css";
import logo from "../../images/logo.svg";
import { Link, NavLink } from "react-router-dom";

function Header({ colorHeader, links, isLoggedIn, onOpenMenu }) {
  return (
    <header className={`header header_color_${colorHeader}`}>
      <div className="header__wrapper">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Лого" />
        </Link>
        {isLoggedIn ? (
          <>
            <nav>
              <ul className="header__navlist">
                {links.map((item, i) => (
                  <li key={i}>
                    <NavLink to={item.link} className="header__link">
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <NavLink to="/profile">
                <button type="button" className="header__account-button">
                  Аккаунт
                </button>
              </NavLink>
              <button
                type="button"
                className="header__menu-button"
                onClick={onOpenMenu}
              ></button>
            </div>
          </>
        ) : (
          <div>
            <NavLink to="/signin">
              <button type="button" className="header__signup-button">
                Регистрация
              </button>
            </NavLink>
            <NavLink to="/signup">
              <button type="button" className="header__login-button">
                Войти
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
