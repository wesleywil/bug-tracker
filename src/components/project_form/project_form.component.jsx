import { createProject } from "../../server/projects_db_table";

const ProjectForm = ({ hidden, setHidden }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
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
    <div
      className={`overflow-hidden ${
        hidden ? "hidden" : ""
      } bg-slate-800/50 backdrop-blur-sm absolute inset-1/4 border-2 border-slate-800 rounded-3xl`}
    >
      <h1 className="text-3xl text-white backdrop-blur-sm bg-slate-900/50 font-semibold text-center">
        New Project
      </h1>
      <form
        className="flex flex-col text-xl text-white p-2 "
        onSubmit={handleFormSubmit}
      >
        <span>Project Name</span>
        <input
          className="bg-slate-700/70 p-1 border-2 border-slate-500 rounded-tr-full rounded-br-full"
          type="text"
          placeholder="project's name"
          id="title"
        />
        <span>Link</span>
        <input
          className="bg-slate-700/70 p-1 border-2 border-slate-500 rounded-tr-full rounded-br-full"
          type="text"
          placeholder="link where you can find this project ex:Github"
          id="link"
        />
        <span>Description</span>
        <textarea
          className="bg-slate-700/70 p-1 border-2 border-slate-500 rounded-xl"
          placeholder="describe the project"
          id="description"
        ></textarea>
        <div className="m-2 p-2 flex justify-center gap-2">
          <button className="bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-600 text-slate-700 font-bold text-2xl px-2 rounded-xl">
            Submit
          </button>
          <button
            onClick={() => setHidden(!hidden)}
            type="button"
            className="bg-red-400 hover:bg-red-500 active:bg-red-700 text-slate-700 font-bold text-2xl px-2 rounded-xl"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default ProjectForm;
