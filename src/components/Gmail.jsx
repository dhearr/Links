import { gmail } from "../../public/static/images";

const Gmail = () => {
  return (
    <a href="mailto:dhearr27@gmail.com" target="blank">
      <img src={gmail} alt="" className="w-[50px] h-[50px]" />
    </a>
  );
};

export default Gmail;
