import "./Header.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header header_color_pink">
      <div className="header__wrapper">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Лого" />
        </Link>
        <div>
          <button className="header__signup-button">Регистрация</button>
          <button className="header__login-button">Войти</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
