import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import StatusAlert from "../../components/status_alert/status_alert.component";
import { createBug } from "../../server/bugs_table";

import { added, completed } from "../../redux/status_toast/status_toastSlice";
import { fetchProjects } from "../../redux/projects/projectsSlice";
import { fetchPriorities } from "../../redux/priorities/prioritiesSlice";
import { fetchStatus } from "../../redux/status/statusSlice";
import { fetchTags } from "../../redux/tags/tagsSlice";

const AddBug = () => {
  // Using Redux
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);
  const projectStatus = useSelector((state) => state.projects.status);
  const priorities = useSelector((state) => state.priorities.priorities);
  const status = useSelector((state) => state.status.arrStatus);
  const tags = useSelector((state) => state.tags.tags);

  let navigate = useNavigate();

  useEffect(() => {
    if (projectStatus === "idle") {
      dispatch(fetchProjects());
      dispatch(fetchPriorities());
      dispatch(fetchStatus());
      dispatch(fetchTags());
    }
  }, [dispatch, projectStatus]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      project_id: parseInt(e.target.elements.project_id.value),
      info: e.target.elements.info.value,
      tag_id: parseInt(e.target.elements.tag_id.value),
      status_id: parseInt(e.target.elements.status_id.value),
      priority_id: parseInt(e.target.elements.priority_id.value),
    };

    createBug(data).then(() => {
      dispatch(added());
      setTimeout(() => {
        navigate("../bugs", { replace: true });
        dispatch(completed());
      }, 3000);
    });
  };

  return (
    <div className="p-2 bg-slate-900/80 h-screen">
      <StatusAlert />
      <h1 className="text-3xl text-white font-semibold text-center border-b-2">
        New Bug
      </h1>
      <div className="border-2 rounded-2xl p-2 mt-2 xl:w-1/3 sm:w-1/2 mx-auto">
        <form
          className="flex flex-col text-xl text-white"
          onSubmit={handleFormSubmit}
        >
          <span className="font-semibold">Project Name</span>
          <select className="bg-slate-600 px-2 py-1 font-bold" id="project_id">
            {projects.length ? (
              projects.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))
            ) : (
              <option>No Projects</option>
            )}
          </select>
          <span className="font-semibold">Info</span>
          <textarea
            className="bg-slate-600 px-2 py-1 font-bold"
            placeholder="Write some info about the bug you are facing"
            id="info"
          ></textarea>
          <span className="font-semibold">Tag</span>
          <select className="bg-slate-600 px-2 py-1 font-bold" id="tag_id">
            {tags.length ? (
              tags.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))
            ) : (
              <option disabled>No Tags</option>
            )}
          </select>
          <span className="font-semibold">Status</span>
          <select className="bg-slate-600 px-2 py-1 font-bold" id="status_id">
            {status.length ? (
              status.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))
            ) : (
              <option disabled>No Status Available</option>
            )}
          </select>
          <span className="font-semibold">Priority</span>
          <select className="bg-slate-600 px-2 py-1 font-bold" id="priority_id">
            {priorities.length ? (
              priorities.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))
            ) : (
              <option>No Priorities Available</option>
            )}
          </select>
          <div className="flex gap-2 mt-2 justify-center">
            <button className="text-2xl font-bold rounded-xl px-2 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-700 text-slate-900">
              Submit
            </button>
            <button
              onClick={() => {
                navigate("/");
              }}
              type="button"
              className="text-2xl font-bold rounded-xl px-2 bg-red-400 hover:bg-red-500 active:bg-red-700 text-slate-900"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBug;
