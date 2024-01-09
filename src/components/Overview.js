import React from "react";

const Overview = () => {
  return (
    <section id="overview" className="py-4 w-full">
      <div className="flex justify-between items-center w-full mb-8">
        <div className="text-xl font-medium text-primaryFontColor">Overview</div>
        <button
          type="button"
          class="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-200 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Last Month
          <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6 bg-white p-[20px] shadow-sm rounded-md">
          <h3 className="leading-6 font-normal text-overviewFontColor">Online Orders</h3>
          <h1 className="mt-4 leading-9 text-3xl font-medium">231</h1>
        </div>
        <div className="col-span-6 bg-white p-[20px] shadow-sm rounded-md">
          <h3 className="leading-6 font-normal text-overviewFontColor">Amount recieved</h3>
          <h1 className="mt-4 leading-9 text-3xl font-medium">₹23,92,312.19</h1>
        </div>
      </div>
    </section>
  );
};

export default Overview;
