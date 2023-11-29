const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white">
      <div className="relative">
        <img
          className="w-[100px] h-[100px] rounded-full"
          src="/src/assets/logo.svg"
          alt="dhearamdani"
        />
        <span className="bottom-[2px] left-[70px] absolute  w-4 h-4 bg-green-500 rounded-full animate-ping"></span>
        <span className="bottom-[2px] left-[70px] absolute  w-4 h-4 bg-green-500 rounded-full"></span>
      </div>
      <h1 className="mt-4 text-2xl">Dhea Ramdani</h1>
      <p className="mt-2 text-xs text-gray-400">Front-end Developer</p>
    </div>
  );
};

export default Header;
