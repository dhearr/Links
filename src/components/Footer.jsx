import { styles } from "../style";

function Footer() {
  return (
    <div className={styles.warpFooter}>
      <p className="text-[10px] sm:text-[14px]">
        Hello <span className="text-[16px] inline-flex">👋</span>, I&apos;m{" "}
        <span className="text-sky-500">Dhea Ramdani</span>, I live in Ciamis,
        West Java, I&apos;m a{" "}
        <span className="text-sky-500">front-end developer</span>{" "}
        <span className="text-[16px] inline-flex">🚀</span>.
      </p>
    </div>
  );
}

export default Footer;
