import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router-dom";

import TableBugs from "../../components/table_bugs/table_bugs.component";

import {
  bugsByProjectId,
  fetchBugsByProject,
} from "../../redux/bugs/bugsByProjectIdSlice";

const ProjectBugs = () => {
  const { project_id } = useParams();
  // Using Redux
  const dispatch = useDispatch();
  const bugs = useSelector(bugsByProjectId);
  const bugStatus = useSelector((state) => state.bugs.status);

  useEffect(() => {
    console.log("Project Bugs");
    if (bugStatus === "idle") {
      console.log("PARAMS => ", project_id);
      dispatch(fetchBugsByProject(project_id));
    }
  }, [dispatch, bugStatus, project_id]);

  return (
    <div className="p-2 bg-slate-900/80 h-screen">
      <h1 className="text-3xl text-white font-semibold text-center border-b-2">
        Project Bugs
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

export default ProjectBugs;
