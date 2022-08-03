import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FaSearch } from "react-icons/fa";

import TableBugs from "../../components/table_bugs/table_bugs.component";

import { allBugs, fetchBugs } from "../../redux/project_bugs/allBugsSlice";

const ListBugs = () => {
  // Using Redux
  const dispatch = useDispatch();
  const bugs = useSelector(allBugs);
  const bugStatus = useSelector((state) => state.bugs.status);

  //const [bugs, setBugs] = useState([]);

  useEffect(() => {
    console.log("USEEFECT LISTBUGS");
    if (bugStatus === "idle") {
      dispatch(fetchBugs());
    }
  }, [dispatch, bugStatus]);

  return (
    <div className="p-2 bg-slate-900/80 h-screen">
      <h1 className="text-3xl text-white font-semibold text-center border-b-2">
        List Bugs
      </h1>
      <div className=" p-2 mt-2">
        <div className="p-2  gap-2 flex place-items-center">
          <input
            className="text-xl px-1 w-1/3"
            type="text"
            placeholder="Search Bugs"
          />
          <button className="text-xl text-yellow-500  ">
            <FaSearch />
          </button>
        </div>
        <TableBugs bugs={bugs} />
      </div>
    </div>
  );
};

export default ListBugs;
