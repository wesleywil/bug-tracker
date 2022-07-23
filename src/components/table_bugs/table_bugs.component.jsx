const TableBugs = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Id</th>
            <th>Info</th>
            <th>Status</th>
            <th>Tag</th>
            <th>Visit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Open</td>
            <td>Blue</td>
            <td className="text-yellow-300 hover:text-yellow-500 font-semibold cursor-pointer	">
              Visit
            </td>
            <td className="text-red-300 hover:text-red-500 font-semibold cursor-pointer	">
              Delete
            </td>
          </tr>

          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>In Progress</td>
            <td>Purple</td>
            <td className="text-yellow-300 hover:text-yellow-500 font-semibold cursor-pointer	">
              Visit
            </td>
            <td className="text-red-300 hover:text-red-500 font-semibold cursor-pointer	">
              Delete
            </td>
          </tr>

          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Open</td>
            <td>Red</td>
            <td className="text-yellow-300 hover:text-yellow-500 font-semibold cursor-pointer	">
              Visit
            </td>
            <td className="text-red-300 hover:text-red-500 font-semibold cursor-pointer	">
              Delete
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableBugs;
