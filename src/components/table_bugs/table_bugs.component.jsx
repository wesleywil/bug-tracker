import { useState } from "react";

import BugDetails from "../bug_details/bug_details.component";

import { selectBugById, deleteBugById } from "../../server/bugs_table";

const TableBugs = ({ bugs }) => {
  const [hiddenDetails, setHiddenDetails] = useState(true);
  const [hiddenDelete, setHiddenDelete] = useState(true);
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
    setHiddenDetails(false);
  };

  const handleDeleteBugById = async (id) => {
    if (id > 0) {
      const res = await deleteBugById(id);
      console.log("BUG DELETED! ", res);
      window.refresh();
    }
  };

  const handleHiddenDelete = (id) => {
    setHiddenDelete(!hiddenDelete);
    setBugId(id);
  };

  return (
    <>
      <div
        className={`border-2 w-1/2 mx-auto rounded-3xl p-2 mb-2 ${
          hiddenDelete ? "hidden" : ""
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
            onClick={() => setHiddenDelete(!hiddenDelete)}
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
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {bugs.length ? (
              bugs.map((item) => (
                <tr key={item.bug_id}>
                  <th>{item.bug_id}</th>
                  <th>{item.bug_info}</th>
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
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="bg-slate-600/40 backdrop-blur-sm absolute ml-10 inset-x-1/4 top-52 rounded-xl">
        <BugDetails
          blockHiddenHandle={setHiddenDetails}
          blockHidden={hiddenDetails}
          bug={bug}
        />
      </div>
    </>
  );
};

export default TableBugs;
