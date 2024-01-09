import React from "react";

const Header = () => {
  return (
    <header className="w-full px-8 py-3 gap-4 grid grid-cols-12 items-center border-b border-b-gray-200 bg-white">
      <div className="col-span-4 flex items-center">
        <div>Payments</div>
        <div className="ml-8 flex items-center">
          <img src="./howToUse.svg" alt="how to use" />
          <div className="ml-2 text-sm">How it works</div>
        </div>
      </div>
      <div className="col-span-4 relative">
        <img src="./search.svg" alt="search" className="absolute top-3 left-3" />
        <input type="text" className="bg-gray-100 px-4 py-2 pl-10 w-full rounded-md" placeholder="Search features, tutorials, etc." />
      </div>
      <div className="col-span-4 flex items-center justify-end">
        <img src="./notification.svg" alt="notification" />
        <img src="./menu.svg" alt="menu" className="ml-4" />
      </div>
    </header>
  );
};

export default Header;
