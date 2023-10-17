import MainePage from "./MainePage";


const NavBar = () => {
  return (
    <div className="w-full m-auto py-16 px-4 relative">
      <div className="font-bold py-3 px-5 text-yellow-800 ">
        <div className="font-lobster flex items-center rounded-xl ">
          <img src="/images/headerImg.png" className="w-[6rem] h-[6rem] mr-2 " />
          <p className="text-5xl">Ceva Dulce</p>
          <div className="font-lobster text-xl flex ml-auto">
            <p>
              cevadulcee@gmail.com<br></br>+40 799 992 922
            </p>
          </div>
        </div>
        <div className="px-2 font-lobster text-3xl flex justify-center shadow-sm space-x-2.5 ">
          <button
            className="px-6 hover:bg-yellow-500 border-2 rounded-full "
            href="home"
          >
            Acasa
          </button>
          <button
            className="px-6 hover:bg-yellow-500 border-2 rounded-full"
            href="products"
          >
            Produse
          </button>
          <button
            className="px-6  hover:bg-yellow-500 border-2 rounded-full"
            href="about"
          >
            Despre noi
          </button>
          <button
            className="px-6  hover:bg-yellow-500 border-2 rounded-full"
            href="contact"
          >
            Contact
          </button>
        </div>
       <MainePage/>
      </div>
    </div>
  );
};

export default NavBar;
