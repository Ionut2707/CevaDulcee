const MiddleLine = () => {
    return (
      <div className="my-10">
        <div className="relative flex  items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-yellow-800">Ceva Dulce</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="flex justify-around ">
          <img
            src="/images/middleline/biscuit2.png"
            className="w-[8rem] h-[8rem]"
          />
          <img
            src="/images/middleline/smile.png"
            className="w-[8rem] h-[8rem]"
          />
          <img
            src="/images/middleline/biscuit1.png"
            className="w-[8rem] h-[8rem]"
          />
        </div>
        <div className="relative flex items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-yellow-800">Ceva Dulce</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
      </div>
    );
}
export default MiddleLine