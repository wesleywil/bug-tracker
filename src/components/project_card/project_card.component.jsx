import { FaPlus, FaGithub, FaBug, FaTrashAlt, FaRegEdit } from "react-icons/fa";

import BugBadge from "../bug-badge/bug-badge.component";

const ProjectCard = ({ hidden, setHidden }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm z-0  w-96 rounded-xl p-2">
      <span className="font-bold text-white">Project Name</span>
      <span className=" text-white float-right">Date: 2022/02/10</span>
      <div className="flex gap-2 m-2 justify-center">
        <BugBadge status={"Open"} qtd={5} color={"text-green-400"} />
        <BugBadge status={"In Progress"} qtd={2} color={"text-yellow-400"} />
        <BugBadge status={"Reviewing"} qtd={3} color={"text-blue-400"} />
        <BugBadge status={"Closed"} qtd={6} color={"text-red-400"} />
      </div>
      <div className="mt-2 flex justify-center gap-4 text-yellow-300 text-3xl">
        <a
          className="tooltip tooltip-right tooltip-warning z-40"
          data-tip="GitHub Link"
          href="https://www.google.com"
          target="_blank"
        >
          <FaGithub />
        </a>
        <button
          className="tooltip tooltip-right tooltip-warning z-30"
          data-tip="New Bug"
        >
          <FaPlus />
        </button>
        <button
          className="tooltip tooltip-right tooltip-warning z-20"
          data-tip="All Bugs"
        >
          <FaBug />
        </button>
        <button
          className="tooltip tooltip-right tooltip-warning z-10"
          data-tip="Edit Project"
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
      <div
        className={`flex flex-col justify-center ${
          hidden ? "hidden" : ""
        } mt-2 border-2 rounded-xl`}
      >
        <h1 className="text-center">Are you sure you want to delete this?</h1>
        <div className="flex justify-center gap-2 text-2xl">
          <button className="font-bold text-red-500 hover:text-red-600 active:text-red-800">
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
    </div>
  );
};

export default ProjectCard;
