import { useDispatch, useSelector } from "react-redux";

import { hide } from "../../redux/bugs/hideBugFormSlice";
import { added, completed } from "../../redux/status_toast/status_toastSlice";

import { handleCreateBugProject } from "../../redux/bugs/bugCreateSlice";

const ProjectNewBug = () => {
  // Using Redux
  const dispatch = useDispatch();
  const item = useSelector((state) => state.hide_bug_form.item);

  const handleBugForm = (event) => {
    event.preventDefault();
    console.log("ITEM =>", item.id);
    const data = {
      project_id: item.id,
      info: event.target.elements.info.value,
      tag_id: parseInt(event.target.elements.tag_id.value),
      priority_id: parseInt(event.target.elements.priority_id.value),
    };
    dispatch(handleCreateBugProject(data));
    dispatch(added());
    dispatch(hide());
    setTimeout(() => {
      dispatch(completed());
    }, 3000);
  };

  return (
    <form className="flex flex-col text-xl text-white" onSubmit={handleBugForm}>
      <h1 className="font-semibold text-center">{item.title}</h1>
      <span className="font-semibold">Info</span>
      <textarea
        className="bg-slate-600 px-2 py-1 font-bold"
        placeholder="Write some info about the bug you are facing"
        id="info"
      ></textarea>
      <span className="font-semibold">Tag</span>
      <select className="bg-slate-600 px-2 py-1 font-bold" id="tag_id">
        <option value="1">FrontEnd</option>
        <option value="2">Backend</option>
      </select>
      <span className="font-semibold">Priority</span>
      <select className="bg-slate-600 px-2 py-1 font-bold" id="priority_id">
        <option value="1">High</option>
        <option value="2">Normal</option>
        <option value="3">Low</option>
      </select>
      <div className="flex gap-2 mt-2 justify-center">
        <button className="text-2xl font-bold rounded-xl px-2 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-700 text-slate-900">
          Submit
        </button>
        <button
          type="button"
          className="text-2xl font-bold rounded-xl px-2 bg-red-400 hover:bg-red-500 active:bg-red-700 text-slate-900"
          onClick={() => dispatch(hide())}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProjectNewBug;
