import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaPlus, FaGithub, FaBug, FaTrashAlt, FaRegEdit } from "react-icons/fa";

import { updateProject, deleteProject } from "../../server/projects_table";
import { createNewBugProject } from "../../server/bugs_table";

import BugBadge from "../bug-badge/bug-badge.component";
import ProjectForm from "../project_form/project_form.component";
import ProjectNewBug from "../project_new_bug/project_new_bug.component";
import StatusAlert from "../status_alert/status_alert.component";

import {
  show as showEdit,
  hide as hideEdit,
} from "../../redux/projects/hideProjectFormEditSlice";

import {
  show as showFormBug,
  hide as hideFormBug,
} from "../../redux/bugs/hideBugFormSlice";

const ProjectCard = ({ item, setMessage }) => {
  // Using Redux
  const dispatchViewForm = useDispatch();
  const hideForm = useSelector((state) => state.hide_project_form_edit.value);
  const dispatchViewBugForm = useDispatch();
  const formBugHidden = useSelector((state) => state.hide_bug_form.value);

  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    console.log("Project Card");
  }, [item]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const data = {
      title: event.target.elements.title.value,
      link: event.target.elements.link.value,
      description: event.target.elements.description.value,
      id: item.id,
    };
    updateProject(data).then((res) => {
      setMessage(
        <StatusAlert message={res.message} bgColor={"bg-yellow-600"} />
      );
      dispatchViewForm(hideEdit());
      setTimeout(() => {
        setMessage("");
      }, 3000);
    });
  };

  const handleBugForm = (event) => {
    event.preventDefault();
    const data = {
      project_id: item.id,
      info: event.target.elements.info.value,
      tag_id: parseInt(event.target.elements.tag_id.value),
      priority_id: parseInt(event.target.elements.priority_id.value),
    };
    createNewBugProject(data).then((res) => {
      setMessage(<StatusAlert message={res.message} />);
      dispatchViewBugForm(hideFormBug());
      setTimeout(() => {
        setMessage("");
      }, 3000);
    });
  };

  const handleDelete = async (id) => {
    const res = await deleteProject(id);
    //console.log("Delete Response =>", res);
    //location.reload();
    setMessage(<StatusAlert message={res.message} bgColor={"bg-red-600"} />);
    setHidden(true);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <>
      <div className="bg-slate-800/50 backdrop-blur-sm z-0  w-96 rounded-xl p-2">
        <span className="font-bold text-white">{item.title}</span>
        <span className=" text-white float-right">Date: {item.add_date}</span>
        <div className="flex gap-2 m-2 justify-center">
          <BugBadge
            status={"Open"}
            qtd={0}
            color={"text-green-400"}
            project_id={item.id}
          />
          <BugBadge
            status={"In Progress"}
            qtd={0}
            color={"text-yellow-400"}
            project_id={item.id}
          />
          <BugBadge
            status={"Reviewing"}
            qtd={0}
            color={"text-blue-400"}
            project_id={item.id}
          />
          <BugBadge
            status={"Closed"}
            qtd={0}
            color={"text-red-400"}
            project_id={item.id}
          />
        </div>
        <div className="mt-2 flex justify-center gap-4 text-yellow-300 text-3xl">
          <a
            className="tooltip tooltip-right tooltip-warning z-40"
            data-tip="GitHub Link"
            href={item.link}
            target="_blank"
          >
            <FaGithub />
          </a>
          <button
            className="tooltip tooltip-right tooltip-warning z-30"
            data-tip="New Bug"
            onClick={() => dispatchViewBugForm(showFormBug())}
          >
            <FaPlus />
          </button>
          <NavLink
            className="tooltip tooltip-right tooltip-warning z-20"
            data-tip="All Bugs"
            to={`/bug_project/${item.id}`}
          >
            <FaBug />
          </NavLink>
          <button
            className="tooltip tooltip-right tooltip-warning z-10"
            data-tip="Edit Project"
            onClick={() => dispatchViewForm(showEdit())}
          >
            <FaRegEdit />
          </button>

          <button
            className="tooltip tooltip-right tooltip-error text-red-500 z-0"
            data-tip="Delete Project"
            onClick={() => setHidden(!hidden)}
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
      {/* Delete Project */}
      <div
        className={`flex flex-col justify-center ${
          hidden ? "hidden" : ""
        } mt-2 border-2 rounded-xl relative w-96  z-20 bg-slate-700/80 p-2 `}
      >
        <h1 className="text-center">Are you sure you want to delete this?</h1>
        <div className="flex justify-center gap-2 text-2xl">
          <button
            onClick={() => handleDelete(item.id)}
            className="font-bold text-red-500 hover:text-red-600 active:text-red-800"
          >
            Yes
          </button>
          <button
            onClick={() => setHidden(!hidden)}
            className="font-bold text-green-500 hover:text-green-600 active:text-green-800"
          >
            No
          </button>
        </div>
      </div>
      {/* Edit Project */}
      <div
        className={`${
          hideForm ? "hidden" : ""
        } absolute w-96 bg-slate-800/80 backdrop-blur-sm z-10`}
      >
        <ProjectForm
          handleForm={handleFormSubmit}
          formText={"Edit Project"}
          item={item}
        />
      </div>
      {/* New Bug */}
      <div
        className={`${
          formBugHidden ? "hidden" : ""
        } p-4 overflow-hidden rounded-3xl absolute w-96 bg-slate-800/80 backdrop-blur-sm z-10`}
      >
        <ProjectNewBug name={item.title} handleForm={handleBugForm} />
      </div>
    </>
  );
};

export default ProjectCard;
