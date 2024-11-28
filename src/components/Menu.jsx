import img1 from "../assets/img/menu1.jpg";
import img2 from "../assets/img/menu2.jpg";
import img3 from "../assets/img/menu3.jpg";
import img4 from "../assets/img/menu4.jpg";
import img5 from "../assets/img/menu5.jpg";
import img6 from "../assets/img/menu6.jpg";
import MenuCard from "../layouts/MenuCard";

const Menu = () => {
  const menuData = [
    {
      id: 1,
      img: img1,
      title: "Margarita Marvel",
      price: "16.99",
    },
    {
      id: 2,
      img: img2,
      title: "Pesto Paradise",
      price: "18.99",
    },
    {
      id: 3,
      img: img3,
      title: "Hawaiian Bliss",
      price: "14.99",
    },
    {
      id: 4,
      img: img4,
      title: "Truffle Treasures",
      price: "15.99",
    },
    {
      id: 5,
      img: img5,
      title: "Farmhouse Harvest",
      price: "18.99",
    },
    {
      id: 6,
      img: img6,
      title: "Cheese Frenzy",
      price: "13.99",
    },
  ];
  return (
    <div className="min-h-screen container flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold text-center pt-24">
        Our Speciality
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-5 px-0 md:px-10">
        {menuData.map((item) => (
          <MenuCard
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
