import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaPlus, FaGithub, FaBug, FaTrashAlt, FaRegEdit } from "react-icons/fa";

import BugBadge from "../bug-badge/bug-badge.component";
import ProjectNewBug from "../project_new_bug/project_new_bug.component";

import {
  show as showFormBug,
  hide as hideFormBug,
} from "../../redux/bugs/hideBugFormSlice";

import {
  show as showForm,
  showEdit as showFormEdit,
  hide as hideForm,
  hideEdit as hideFormEdit,
} from "../../redux/projects/projectFormSlice";

import { removed, completed } from "../../redux/status_toast/status_toastSlice";
import { handleDeleteProject } from "../../redux/projects/createUpdateAndDeleteProjectSlice";

const ProjectCard = ({ item }) => {
  // Using Redux
  const formHide = useSelector((state) => state.projectForm.hide);
  const formBugHidden = useSelector((state) => state.hide_bug_form.value);
  const dispatch = useDispatch();

  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    console.log("Project Card");
  }, [item, formHide]);

  const handleDelete = (id) => {
    dispatch(handleDeleteProject(id));
    dispatch(removed());
    setHidden(true);
    setTimeout(() => {
      dispatch(completed());
      location.reload();
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
            onClick={() => dispatch(showFormBug(item))}
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
            onClick={() => dispatch(showFormEdit(item))}
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
        <h1 className="text-center">
          Are you sure you want to delete this? {item.title}
        </h1>
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
      <div
        className={`${
          formBugHidden ? "hidden" : ""
        } p-4 overflow-hidden rounded-3xl absolute w-96 bg-slate-800/80 backdrop-blur-sm z-10`}
      >
        <ProjectNewBug />
      </div>
    </>
  );
};

export default ProjectCard;
