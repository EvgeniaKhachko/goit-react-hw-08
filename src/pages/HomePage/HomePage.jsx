import s from "./HomePage.module.css";
import { FaAddressBook } from "react-icons/fa6";

const Home = () => {
  return (
    <div className={s.heading}>
      <div className={s.boxTitle}>
        <h1 className={s.mainTitle}>Phone book</h1>
       
      </div>
      <span></span>
    </div>
  );
};

export default Home;
