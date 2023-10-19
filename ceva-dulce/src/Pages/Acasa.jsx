import { Carousel, Button } from "@material-tailwind/react";
import { Link } from "react-scroll";

const Acasa = () => {
  return (
    <div id="home">
      <div className="bg-gray-100 rounded-xl flex justify-between  ">
        <div className="flex justify-start px-12 py-[120px] font-lobster text-brown-500 text-2xl">
          <p>
            În fiecare zi, ne străduim să vă încântăm cu cele mai delicioase
            prăjituri și deserturi de cea mai înaltă calitate.
            <br></br> La Ceva Dulce, ne îmbinăm creativitatea cu gustul autentic
            pentru a vă oferi experiențe de neuitat în lumea deserturilor.
            <br></br> Savurați fiecare mușcătură și descoperiți magia gustului
            la <b>Ceva Dulce!</b>
            <div className="flex justify-center mt-12">
              <Link
                to="produse"
                spy={true}
                smooth={true}
                offset={100}
                duration={500}
              >
                <Button size="lg" color="brown" variant="gradient">
                  Mai multe
                </Button>
              </Link>
            </div>
          </p>
        </div>
        <div className=" flex justify-center w-[440px] h-[380px] mr-[120px] mt-10">
          <Carousel
            autoplay={true}
            autoplayDelay={3000}
            prevArrow={false}
            nextArrow={false}
            loop={true}
            transition={{ duration: 2, type: "tween" }}
          >
            <div className="flex justify-center w-[440px] h-[340px] ">
              <img src="/images/carousel/5.png" alt="image5" />
            </div>
            <div className="flex justify-center w-[440px] h-[340px]">
              <img src="/images/carousel/donuts.png" alt="donuts" />
            </div>
            <div className="flex justify-center w-[440px] h-[340px]">
              <img src="/images/carousel/4.png" alt="image4" />
            </div>
            <div className="flex justify-center w-[440px] h-[340px]">
              <img src="/images/carousel/brownie.png" alt="brownie" />
            </div>
            <div className="flex justify-center w-[440px] h-[340px]">
              <img src="/images/carousel/cookies.png" alt="image4" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default Acasa;
