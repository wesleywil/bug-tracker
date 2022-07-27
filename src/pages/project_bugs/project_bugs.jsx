import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router-dom";

import TableBugs from "../../components/table_bugs/table_bugs.component";

const ProjectBugs = () => {
  let { project_id } = useParams();
  return (
    <div className="p-2 bg-slate-900/80 h-screen">
      <h1 className="text-3xl text-white font-semibold text-center border-b-2">
        List Bugs {project_id}
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
        <TableBugs project_id={project_id} />
      </div>
    </div>
  );
};

export default ProjectBugs;
