import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import {RxDotFilled} from 'react-icons/rx'

const MainePage = () => {
    const images = [
      '/images/1.png',
      '/images/2.png',
      '/images/4.png',
  ]

    const [currentIndex, setCurrentIndex] = useState(0)
    
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    };
    
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

  return (
    <div className="container font-lobster text-2xl">
      <div className="flex justify-start rounded-full m-12">
        <div className="overflow-y-auto max-h-[50vh] w-1/2 pr-4 p-[130px]" >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br></br>
          Voluptates eum adipisci cum totam optio soluta corrupti est
          accusantium recusandae nobis. <br></br>Quidem ullam eaque accusamus
          consectetur.
          <br></br>
        </div>
        <div className="max-w-[380px] h-[440px] w-full m-auto py-16 px-4 relative">
          <div
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>
          <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                      <BsChevronCompactLeft onClick={prevSlide } size={30} />
          </div>
          <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide}  size={30} />
                  </div>
                  <div className="flex top-4 justify-center py-2">
                      {images.map((image, slideIndex) => (
                          <div key={slideIndex} onClick={()=>goToSlide(slideIndex)} className="text-2xl cursor-pointer"><RxDotFilled/></div>
                      ))}
                  </div>
        </div>
      </div>
    </div>
  );
};
export default MainePage;
