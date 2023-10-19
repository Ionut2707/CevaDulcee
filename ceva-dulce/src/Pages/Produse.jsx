const Product = ({ title, imageSrc }) => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h3 className="text-2xl font-lobster text-brown-500 mb-2">{title}</h3>
      <img src={imageSrc} alt={title} className="w-[290px] h-[290px] bg-gray-100 rounded-lg" />
    </div>
  );
};

const Produse = () => {
  const products = [
    { title: "Cake Pop", imageSrc: "/images/produse/cakepop.png" },
    { title: "Fruit Tart", imageSrc: "/images/produse/tart.png" },
    { title: "Cookies", imageSrc: "/images/produse/cookies2.png" },
    { title: "Brownies", imageSrc: "/images/produse/brownie2.png" },
    { title: "Snicker Cake", imageSrc: "/images/produse/snicker.png" }, 
    { title: "Donuts", imageSrc: "/images/produse/donuts2.png" }, 

  ];

  return (
    <div id="produse">
      <div className="font-lobster text-4xl text-brown-500 text-center py-6 border-2 rounded-full">
        Produsele Noastre
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-lobster text-brown-500 p-4">
        {products.map((product, index) => (
          <Product
            key={index}
            title={product.title}
            imageSrc={product.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Produse;
