import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={s.nav}>
      <NavLink to="/" className={s.navHome}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={s.navContact} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;
