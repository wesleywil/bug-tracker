import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { hide, hideEdit } from "../../redux/projects/projectFormSlice";
import {
  handleCreateProject,
  handleUpdateProject,
} from "../../redux/projects/createUpdateAndDeleteProjectSlice";
import {
  added,
  updated,
  completed,
} from "../../redux/status_toast/status_toastSlice";

const ProjectForm = ({ formText }) => {
  //Using Redux
  const item = useSelector((state) => state.projectForm.item);
  const status = useSelector((state) => state.projectForm.status);
  const statusUpdateCreate = useSelector(
    (state) => state.create_update_delete_project.status
  );
  const dispatch = useDispatch();

  const handleUpdateSubmit = (event) => {
    console.log("UPDATED!");
    const data = {
      title: event.target.elements.title.value,
      link: event.target.elements.link.value,
      description: event.target.elements.description.value,
      id: item.id,
    };
    dispatch(handleUpdateProject(data));
    dispatch(updated());
    dispatch(hideEdit());
    setTimeout(() => {
      dispatch(completed());
    }, 3000);
  };

  const handleCreateSubmit = (event) => {
    console.log("CREATED==>");

    const data = {
      title: event.target.elements.title.value,
      link: event.target.elements.link.value,
      description: event.target.elements.description.value,
    };
    dispatch(handleCreateProject(data));
    dispatch(hide());
    dispatch(added());
    setTimeout(() => {
      dispatch(completed());
    }, 3000);
  };

  useEffect(() => {
    console.log("ITEM FROM USESELECTOR");
  }, [dispatch, handleUpdateSubmit, statusUpdateCreate]);

  return (
    <>
      <h1 className="text-3xl text-white backdrop-blur-sm bg-slate-900/50 font-semibold text-center">
        {formText}
      </h1>
      <form
        className="flex flex-col text-xl text-white p-2 "
        onSubmit={status === "edit" ? handleUpdateSubmit : handleCreateSubmit}
      >
        <span>Project Name</span>
        <input
          className="bg-slate-700/70 p-1 border-2 border-slate-500 rounded-tr-full rounded-br-full"
          type="text"
          placeholder="project's name"
          id="title"
          defaultValue={status === "edit" ? item.title : ""}
        />
        <span>Link</span>
        <input
          className="bg-slate-700/70 p-1 border-2 border-slate-500 rounded-tr-full rounded-br-full"
          type="text"
          placeholder="link where you can find this project ex:Github"
          id="link"
          defaultValue={status === "edit" ? item.link : ""}
        />
        <span>Description</span>
        <textarea
          className="bg-slate-700/70 p-1 border-2 border-slate-500 rounded-xl"
          placeholder="describe the project"
          id="description"
          defaultValue={status === "edit" ? item.description : ""}
        ></textarea>
        <div className="m-2 p-2 flex justify-center gap-2">
          <button className="bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-600 text-slate-700 font-bold text-2xl px-2 rounded-xl">
            Submit
          </button>
          <button
            onClick={
              status === "edit"
                ? () => dispatch(hideEdit())
                : () => dispatch(hide())
            }
            type="button"
            className="bg-red-400 hover:bg-red-500 active:bg-red-700 text-slate-700 font-bold text-2xl px-2 rounded-xl"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};
export default ProjectForm;
