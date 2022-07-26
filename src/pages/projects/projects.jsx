import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

import { allProjects, createProject } from "../../server/projects_db_table";

import ProjectCard from "../../components/project_card/project_card.component";
import ProjectForm from "../../components/project_form/project_form.component";

const Projects = () => {
  const [query, setQuery] = useState([]);
  const [hiddenForm, setHiddenForm] = useState(true);

  useEffect(() => {
    const getAllProjects = async () => {
      const res = await allProjects();
      console.log("RESULT=> ", res);
      setQuery(res);
    };
    getAllProjects();
  }, []);

  const handleFormSubmit = (event) => {
    console.log("DATA==>", event.target.elements.title.value);

    const data = {
      title: event.target.elements.title.value,
      link: event.target.elements.link.value,
      description: event.target.elements.description.value,
    };

    createProject(data).then((res) => {
      console.log("Result==>", res);
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
      <div className="flex flex-wrap justify-center gap-4 p-2 mt-2">
        {query.length ? (
          query.map((item) => <ProjectCard key={item.id} item={item} />)
        ) : (
          <h1 className="bg-slate-500/20 backdrop-blur-sm p-6 text-6xl border-2 border-slate-700 rounded-2xl">
            NO PROJECTS YET
          </h1>
        )}
      </div>
      <div
        className={`overflow-hidden ${
          hiddenForm ? "hidden" : ""
        } bg-slate-800/50 backdrop-blur-sm absolute inset-1/4 border-2 border-slate-800 rounded-3xl`}
      >
        <ProjectForm
          hidden={hiddenForm}
          setHidden={setHiddenForm}
          handleForm={handleFormSubmit}
          formText={"New Project"}
        />
      </div>
    </div>
  );
};
export default Projects;
