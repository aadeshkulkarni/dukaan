import React from "react";
import {
  Table as ReactTable,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  createColumnHelper,
  flexRender,
} from "@tanstack/react-table";
import data from "../data.json";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("orderID", {
    header: () => <span>Order ID</span>,
    cell: (info) => <span className="text-highlightColor cursor-pointer font-normal">{info.getValue()}</span>,
  }),
  columnHelper.accessor("orderDate", {
    header: () => <div className="text-right flex items-center">Order date <img className="ml-2" src="./carat.svg" alt="fees info"/></div>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("orderAmount", {
    header: () => <div className="text-right">Order amount</div>,
    cell: (info) => <div className="text-right">{"₹" + info.getValue()}</div>,
  }),
  columnHelper.accessor("transactionFees", {
    header: () => <div className="text-right flex items-center justify-end">Transaction fees <img className="ml-2" src="./info.svg" alt="fees info"/></div>,
    cell: (info) => <div className="text-right">{"₹" + info.getValue()}</div>,
  }),
];

const TransactionTable = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-5">
        <DebouncedInput value={""} onChange={(value) => {}} className="px-4 py-2 pl-10 text-sm border border-gray-200 rounded-md w-[248px]" placeholder="Search by order ID..." />
        <div className="flex items-center">
          <button className="p-2 mr-2 flex items-center border border-gray-300 text-sm">
            Sort <img className="mx-2 w-5 h-5" src="./sort.svg" alt="sort" />
          </button>
          <button className="p-2 flex items-center border border-gray-300">
            <img className="w-5 h-5" src="./download.svg" alt="download" />
          </button>
        </div>
      </div>
      <Table
        {...{
          data,
          columns,
        }}
        page
      />
      <hr />
    </>
  );
};

function Table({ data, columns }) {
  const table = useReactTable({
    data,
    columns,
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    //
    debugTable: true,
    initialState: {
      pagination: {
        pageSize: 19,
      },
    },
  });

  return (
    <div className="p-2 w-full">
      <div className="h-2 w-full" />
      <table className="w-full">
        <thead className="rounded-sm">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th className="text-sm py-[10px] px-3 bg-tableHeader font-normal text-md border-b border-gray-100 text-left" key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className="w-full">
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td className="text-sm py-[14px] px-3 border-b border-gray-200" key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="flex justify-center items-center gap-2 p-4">
        <button className="border rounded-md p-2 text-sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          {"<  Previous"}
        </button>
        {/* <span className="flex items-center gap-1">
          <strong>
            {table.getState().pagination.pageIndex + 1}
          </strong>
        </span> */}
        {/* <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
          />
        </span> */}
        {Array(table.getPageCount())
          .join()
          .split(",")
          .map((_, i) => (
            <div
              onClick={() => table.setPageIndex(i)}
              className={`text-sm cursor-pointer px-2 py-1 rounded-md  ${table.getState().pagination.pageIndex === i ? "bg-sky-700 text-white border border-gray-100" : "text-black"}`}
            >
              {i + 1}
            </div>
          ))}
        {/* <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select> */}
        <button className="border rounded-md p-2 text-sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          {"Next  >"}
        </button>
      </div>
    </div>
  );
}

function DebouncedInput({ value: initialValue, onChange, debounce = 500, ...props }) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="w-full relative">
      <img src="./search.svg" alt="search" className="absolute top-3 left-3" />
      <input {...props} value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
export default TransactionTable;
