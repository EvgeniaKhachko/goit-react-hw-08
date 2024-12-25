import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.userMenuBox}>
      <div className={css.userMail}>Welcome, {user.name}</div>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};
export default UserMenu;
