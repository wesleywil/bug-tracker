import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import ProjectCard from "../../components/project_card/project_card.component";

const Projects = () => {
  const [hiddenDelete, setHiddenDelete] = useState(true);
  return (
    <div className="h-screen">
      <h1 className="text-3xl text-white font-semibold text-center border-b-2">
        Projects
      </h1>
      <div class="tooltip tooltip-right tooltip-warning" data-tip="New Project">
        <button className="rounded-full bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-700 p-2 text-2xl text-slate-900 mt-2 ml-12">
          <FaPlus />
        </button>
      </div>

      <div className="flex gap-2 p-2 mt-2">
        <ProjectCard hidden={hiddenDelete} setHidden={setHiddenDelete} />
      </div>
    </div>
  );
};
export default Projects;
