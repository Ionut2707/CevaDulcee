import {Link} from 'react-scroll'

const NavBar = () => {
  return (
    <div className="w-full m-auto  px-4 relative " id="navbar">
      <div className="font-bold py-3 px-5 text-brown-500 ">
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
          <button className="px-6 hover:bg-gray-200 border-2 rounded-full ">
            <Link
              to="navbar"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
            >
              Acasa
            </Link>
          </button>
          <button className="px-6 hover:bg-gray-200 border-2 rounded-full">
            <Link
              to="produse"
              spy={true}
              smooth={true}
              offset={100}
              duration={1000}
            >
              Produse
            </Link>
          </button>
          <button className="px-6  hover:bg-gray-200 border-2 rounded-full">
            <a href="#about">Despre noi</a>
          </button>
          <button className="px-6  hover:bg-gray-200 border-2 rounded-full">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
            >
              Contact
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
