import React from "react";
import Overview from "./Overview";
import TransactionTable from "./TransactionTable";

const Main = () => {
  return (
    <section id="container" className="p-8 w-full bg-gray-50">
      <Overview />
      <section id="transactions" className="py-4 w-full">
        <div className="flex justify-between items-center w-full mb-5">
          <h1 className="text-xl font-medium text-primaryFontColor">Transactions | This Month</h1>
        </div>
        <div className="w-full border border-gray-100 rounded-md p-2 bg-white">
          <TransactionTable />
        </div>
      </section>
    </section>
  );
};

export default Main;
