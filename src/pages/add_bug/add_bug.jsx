import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import StatusAlert from "../../components/status_alert/status_alert.component";

import { allProjects } from "../../server/projects_table";
import { allPriorities } from "../../server/priorities_table";
import { allStatus } from "../../server/status_table";
import { allTags } from "../../server/tags_table";
import { createBug } from "../../server/bugs_table";

const AddBug = () => {
  let navigate = useNavigate();
  const [response, setResponse] = useState("");
  const [projects, setProjects] = useState([]);
  const [priorities, setPriorities] = useState([]);
  const [status, setStatus] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    allProjects().then((res) => {
      setProjects(res);
    });
    allPriorities().then((res) => {
      setPriorities(res);
    });
    allStatus().then((res) => {
      setStatus(res);
    });
    allTags().then((res) => {
      setTags(res);
    });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      project_id: parseInt(e.target.elements.project_id.value),
      info: e.target.elements.info.value,
      tag_id: parseInt(e.target.elements.tag_id.value),
      status_id: parseInt(e.target.elements.status_id.value),
      priority_id: parseInt(e.target.elements.priority_id.value),
    };

    createBug(data).then((res) => {
      setResponse(<StatusAlert message={res.message} />);
      setTimeout(() => {
        setResponse(<Navigate to="/bugs" replace={true} />);
      }, 3000);
    });
  };

  return (
    <div className="p-2 bg-slate-900/80 h-screen">
      {response}
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
