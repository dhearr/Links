import { logo } from "../../public/static/images";
import { styles } from "../style";

const Header = () => {
  return (
    <div className={styles.warpHeader}>
      <div className="relative">
        <img
          className="w-[100px] h-[100px] rounded-full"
          src={logo}
          alt="dhearamdani"
        />
        <span className={styles.parrentPing}></span>
        <span className={styles.childPing}></span>
      </div>
      <h1 className="mt-4 text-2xl">Dhea Ramdani</h1>
      <p className="mt-2 text-xs text-gray-400">Front-end Developer</p>
    </div>
  );
};

export default Header;
