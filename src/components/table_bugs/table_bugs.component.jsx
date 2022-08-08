import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import BugDetails from "../bug_details/bug_details.component";
import BugUpdate from "../bug_update/bug_update.component";
import StatusAlert from "../status_alert/status_alert.component";

import { selectBugById, deleteBugById } from "../../server/bugs_table";

import { show as showDetails } from "../../redux/table_bugs/hideDetailsSlice";
import { show as showUpdate } from "../../redux/table_bugs/hideUpdateSlice";
import {
  show as showDelete,
  hide as hideDelete,
} from "../../redux/table_bugs/hideDeleteSlice";

import { removed, completed } from "../../redux/status_toast/status_toastSlice";
import { fetchBugById } from "../../redux/bugs/bugsSimpleSlice";

const TableBugs = ({ bugs }) => {
  //Using Redux
  const dispatch = useDispatch();
  const hideDeleteSelector = useSelector((state) => state.hide_delete.value);

  const [bugId, setBugId] = useState(0);
  const [bug, setBug] = useState({
    bug_id: "",
    bug_info: "",
    status_title: "",
    tag_title: "",
    priority_title: "",
    project_title: "",
    bug_add_date: "",
    bug_updated_date: "",
  });

  useEffect(() => {
    console.log("Table Bugs", bugs);
  }, [bugs]);

  const handleSelectBugId = async (id) => {
    const res = await selectBugById(id);
    console.log("BUG BY ID=> ", res);
    setBug({
      bug_id: res[0].bug_id,
      bug_info: res[0].bug_info,
      status_title: res[0].status_title,
      tag_title: res[0].tag_title,
      priority_title: res[0].priority_title,
      project_title: res[0].project_name,
      bug_add_date: res[0].bug_add_date,
      bug_updated_date: res[0].bug_updated_date,
    });
    dispatch(showDetails());
  };

  const handleDeleteBugById = async (id) => {
    if (id > 0) {
      const res = await deleteBugById(id);
      console.log("BUG DELETED! ", res);
      dispatch(removed());
      dispatch(hideDelete());
      setTimeout(() => {
        dispatch(completed());
        location.reload();
      }, 3000);
    }
  };

  const handleHiddenDelete = (id) => {
    dispatch(showDelete());
    setBugId(id);
  };

  const handleHiddenUpdate = (id) => {
    dispatch(showUpdate());
    //setBugId(id);
    dispatch(fetchBugById(id));
  };

  return (
    <>
      <StatusAlert />
      <div
        className={`border-2 w-1/2 mx-auto rounded-3xl p-2 mb-2 ${
          hideDeleteSelector ? "hidden" : ""
        }`}
      >
        <h1 className="text-center text-red-500">
          ARE YOU SURE YOU WANT TO DELETE THIS?
        </h1>
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => handleDeleteBugById(bugId)}
            className="text-red-400 hover:text-red-500 active:text-red-700"
          >
            YES
          </button>
          <button
            onClick={() => dispatch(hideDelete())}
            className="text-green-400 hover:text-green-500 active:text-green-700"
          >
            NO
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th>Info</th>
              <th>Status</th>
              <th>Tag</th>
              <th>Priority</th>
              <th>Project</th>
              <th>Visit</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {bugs.length ? (
              bugs.map((item) => (
                <tr key={item.bug_id}>
                  <th>{item.bug_id}</th>
                  <th>
                    {item.bug_info.length > 13
                      ? item.bug_info.slice(0, 13) + "..."
                      : item.bug_info}
                  </th>
                  <th>{item.status_title}</th>
                  <th>{item.tag_title}</th>
                  <th>{item.priority_title}</th>
                  <th>{item.project_title}</th>
                  <td
                    onClick={() => handleSelectBugId(item.bug_id)}
                    className="text-yellow-300 hover:text-yellow-500 font-semibold cursor-pointer	"
                  >
                    View
                  </td>
                  <td
                    onClick={() => handleHiddenUpdate(item.bug_id)}
                    className="text-green-300 hover:text-green-500 font-semibold cursor-pointer	"
                  >
                    Update
                  </td>
                  <td
                    onClick={() => handleHiddenDelete(item.bug_id)}
                    className="text-red-300 hover:text-red-500 font-semibold cursor-pointer	"
                  >
                    Delete
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th>1</th>
                <th>No info</th>
                <th>No Status</th>
                <th>No Tags</th>
                <th>No Priority</th>
                <th>No Projects</th>
                <th>X</th>
                <th>X</th>
                <th>X</th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="bg-slate-600/40 backdrop-blur-sm absolute ml-10 inset-x-1/4 top-52 rounded-xl">
        <BugDetails bug={bug} btnName={"Close"} />
        <BugUpdate bug_id={bugId} />
      </div>
    </>
  );
};

export default TableBugs;
