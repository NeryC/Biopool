const TableLayout = ({headers, rows}) => {
  
  return (
    <div className="
      py-5"
    >
      <table className="customTable table-fixed bg-white w-full border-t-2 border-gray font-gibson2 ">
        <thead className="text-lime2 text-lg md:text-xl lg:text-base">
          {headers}
        </thead>
        <tbody className="text-base lg:text-xs tracking-wide">
          {rows}
        </tbody>
      </table>
    </div>
  );
};

export default TableLayout;
