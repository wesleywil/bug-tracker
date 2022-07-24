import { useState } from "react";
import { FaPlus, FaListAlt } from "react-icons/fa";

import { allProjects } from "../../server/projects_db_table";

import ProjectCard from "../../components/project_card/project_card.component";

const Projects = () => {
  const [hiddenDelete, setHiddenDelete] = useState(true);

  const projectList = async () => {
    const list = await allProjects();
    console.log("RESULT ==>", list);
  };
  return (
    <div className="h-screen">
      <h1 className="text-3xl text-white font-semibold text-center border-b-2">
        Projects
      </h1>
      <div
        className="tooltip tooltip-right tooltip-warning"
        data-tip="New Project"
      >
        <button className="rounded-full bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-700 p-2 text-2xl text-slate-900 mt-2 ml-12">
          <FaPlus />
        </button>
      </div>
      <button
        onClick={() => projectList()}
        className="rounded-full bg-blue-300 hover:bg-blue-400 active:bg-blue-700 p-2 text-2xl text-slate-900 mt-2 ml-2"
      >
        <FaListAlt />
      </button>

      <div className="flex gap-2 p-2 mt-2">
        <ProjectCard hidden={hiddenDelete} setHidden={setHiddenDelete} />
      </div>
    </div>
  );
};
export default Projects;
