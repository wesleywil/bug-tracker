import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hide, show } from "../../redux/projects/hideProjectFormSlice.js";

import { FaPlus } from "react-icons/fa";

import { allProjects, createProject } from "../../server/projects_table";

import ProjectCard from "../../components/project_card/project_card.component";
import ProjectForm from "../../components/project_form/project_form.component";
import StatusAlert from "../../components/status_alert/status_alert.component";

const Projects = () => {
  // Using Redux
  const hideForm = useSelector((state) => state.hide_project_form.value);
  const dispatch = useDispatch();

  const [response, setResponse] = useState("");
  const [query, setQuery] = useState([]);

  useEffect(() => {
    const getAllProjects = async () => {
      const res = await allProjects();
      console.log("RESULT=> ", res);
      setQuery(res);
    };
    getAllProjects();
  }, [response]);

  const handleFormSubmit = (event) => {
    console.log("DATA==>", event.target.elements.title.value);

    const data = {
      title: event.target.elements.title.value,
      link: event.target.elements.link.value,
      description: event.target.elements.description.value,
    };

    createProject(data).then((res) => {
      setResponse(<StatusAlert message={res.message} />);
      dispatch(hide());
      setTimeout(() => {
        setResponse("");
      }, 3000);
    });
  };

  return (
    <div className="h-screen">
      {response}
      <h1 className="text-3xl text-white font-semibold text-center border-b-2">
        Projects
      </h1>
      <div
        className="tooltip tooltip-right tooltip-warning"
        data-tip="New Project"
      >
        <button
          onClick={() => dispatch(show())}
          className="rounded-full bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-700 p-2 text-2xl text-slate-900 mt-2 ml-12"
        >
          <FaPlus />
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-2 mt-2">
        {query.length ? (
          query.map((item) => (
            <ProjectCard key={item.id} item={item} setMessage={setResponse} />
          ))
        ) : (
          <h1 className="bg-slate-500/20 backdrop-blur-sm p-6 text-6xl border-2 border-slate-700 rounded-2xl">
            NO PROJECTS YET
          </h1>
        )}
      </div>
      <div
        className={`overflow-hidden ${
          hideForm ? "hidden" : ""
        } bg-slate-800/50 backdrop-blur-sm absolute inset-1/4 border-2 border-slate-800 rounded-3xl`}
      >
        <ProjectForm handleForm={handleFormSubmit} formText={"New Project"} />
      </div>
    </div>
  );
};
export default Projects;
