import { NavLink } from "react-router-dom";
import logoImage from "../../assets/logo/logo.png";
import "./index.css";

const Header = () => (
  <header className="header">
    <div className="container header__container">
      <div className="header__inner">
        <img src={logoImage} width="70" alt="Логотип" />
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__list-item">
              <NavLink className="header__nav-link" to="/leagues" activeClassName="header__list-item--active">
                Лиги
              </NavLink>
            </li>
            <li className="header__list-item">
              <NavLink className="header__nav-link" to="/teams" activeClassName="header__list-item--active">
                Команды
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
