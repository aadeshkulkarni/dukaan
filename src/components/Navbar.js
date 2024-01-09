import React from "react";

const navList = [
  {
    logo: "./home.svg",
    label: "Home",
  },
  {
    logo: "./order.svg",
    label: "Orders",
  },
  {
    logo: "./product.svg",
    label: "Products",
  },
  {
    logo: "./delivery.svg",
    label: "Delivery",
  },
  {
    logo: "./marketing.svg",
    label: "Marketing",
  },
  {
    logo: "./analytics.svg",
    label: "Analytics",
  },
  {
    logo: "./payments.svg",
    label: "Payments",
  },
  {
    logo: "./tools.svg",
    label: "Tools",
  },
  {
    logo: "./discounts.svg",
    label: "Discounts",
  },
  {
    logo: "./audience.svg",
    label: "Audience",
  },
  {
    logo: "./appearance.svg",
    label: "Appearance",
  },
  {
    logo: "./plugins.svg",
    label: "Plugins",
  },
];

const Navbar = () => {
  return (
    <div className="hidden md:block md:fixed h-screen overflow-hidden w-[200px] bg-primary text-white py-2">
      <div className="flex items-center px-4">
        <img src="./brand.svg" alt="brand" />
        <div className="flex flex-col px-4 py-2">
          <div>Nishyan</div>
          <div className="underline text-sm font-thin text-gray-100 cursor-pointer">Visit store</div>
        </div>
      </div>
      <ul className="p-2">
        {navList.map((nav) => (
          <li className={`cursor-pointer px-4 py-2 rounded-md font-extralight text-sm flex ${nav.label==="Payments" ? "bg-opacity-50 bg-gray-600" : ""}`}><img className="w-5 h-5 mr-4" src={nav.logo} alt={nav.label} />{nav.label}</li>
        ))}
      </ul>
          <div className="absolute bottom-4 w-4/5 left-4 flex px-2 py-1 rounded-md bg-creditsColor">
            <img src="./credits.svg" alt="credits" />
              <div className="p-2">
                <div className="text-xs font-thin">Available credits</div>
                <div className="text-xs font-medium">222.10</div>
              </div>
          </div>
    </div>
  );
};

export default Navbar;
