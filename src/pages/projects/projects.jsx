import { useState } from "react";
import { FaPlus, FaListAlt } from "react-icons/fa";

import {
  allProjects,
  deleteWrontProject,
} from "../../server/projects_db_table";

import ProjectCard from "../../components/project_card/project_card.component";
import ProjectForm from "../../components/project_form/project_form.component";

const Projects = () => {
  const [hiddenDelete, setHiddenDelete] = useState(true);
  const [hiddenForm, setHiddenForm] = useState(true);

  const deleteHandle = async () => {
    console.log("DELETING...");
    deleteWrontProject(3).then((res) => {
      console.log("INFO", res);
    });
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
        <button
          onClick={() => setHiddenForm(!hiddenForm)}
          className="rounded-full bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-700 p-2 text-2xl text-slate-900 mt-2 ml-12"
        >
          <FaPlus />
        </button>
      </div>
      <button
        onClick={() => deleteHandle()}
        className="bg-black text-white px-2 rounded-full text-2xl"
      >
        DELETE
      </button>

      <div className="flex flex-wrap justify-center gap-4 p-2 mt-2">
        <ProjectCard hidden={hiddenDelete} setHidden={setHiddenDelete} />
        <ProjectCard hidden={hiddenDelete} setHidden={setHiddenDelete} />
        <ProjectCard hidden={hiddenDelete} setHidden={setHiddenDelete} />
        <ProjectCard hidden={hiddenDelete} setHidden={setHiddenDelete} />
        <ProjectCard hidden={hiddenDelete} setHidden={setHiddenDelete} />
        <ProjectCard hidden={hiddenDelete} setHidden={setHiddenDelete} />
      </div>
      <ProjectForm hidden={hiddenForm} setHidden={setHiddenForm} />
    </div>
  );
};
export default Projects;
