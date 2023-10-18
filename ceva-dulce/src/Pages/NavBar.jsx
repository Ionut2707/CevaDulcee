import MainePage from "./MainePage";


const NavBar = () => {
  return (
    <div className="w-full m-auto  px-4 relative " id="navbar">
      <div className="font-bold py-3 px-5 text-yellow-800 ">
        <div className="font-lobster flex items-center rounded-xl ">
          <img
            src="/images/middleline/smile.png"
            className="w-[8rem] h-[8rem] mr-2 "
          />
          <p className="text-5xl">Ceva Dulce</p>
          <div className="font-lobster text-xl flex ml-auto rounded-lg border-2">
            <p>
              cevadulcee@gmail.com<br></br>+40 799 992 922
            </p>
          </div>
        </div>
        <div className="px-2 font-lobster text-3xl flex justify-center  space-x-2.5 pb-2  ">
          <button className="px-6 hover:bg-yellow-500 border-2 rounded-full ">
            <a href="#navbar">Acasa</a>
          </button>
          <button className="px-6 hover:bg-yellow-500 border-2 rounded-full">
            <a href="#produse">Produse</a>
          </button>
          <button className="px-6  hover:bg-yellow-500 border-2 rounded-full">
            <a href="#about">Despre noi</a>
          </button>
          <button className="px-6  hover:bg-yellow-500 border-2 rounded-full">
            <a href="#contact">Contact</a>
          </button>
        </div>
        <MainePage />
      </div>
    </div>
  );
};

export default NavBar;
