import { FaMagnifyingGlassArrowRight } from "react-icons/fa6";
import s from "./HomePage.module.css";

const Home = () => {
  return (
    <div className={s.heading}>
      <div className={s.boxMainTitle}>
        <h1 className={s.mainTitle}>Phone book</h1>
      </div>
      <span>
        <FaMagnifyingGlassArrowRight className={s.icon} size="100" />
      </span>
    </div>
  );
};

export default Home;
