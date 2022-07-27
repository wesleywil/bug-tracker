import { useState, useEffect } from "react";

import { selectBugsByProject } from "../../server/bugs_table";

const TableBugs = ({ project_id }) => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    selectBugsByProject(project_id).then((res) => {
      console.log("BUGS ==> ", res);
      setBugs(res);
    });
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Id</th>
            <th>Info</th>
            <th>Status</th>
            <th>Tag</th>
            <th>Project</th>
            <th>Visit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {bugs.length ? (
            bugs.map((item) => (
              <tr>
                <th>{item.bug_id}</th>
                <th>{item.bug_info}</th>
                <th>{item.status_title}</th>
                <th>{item.tag_title}</th>
                <th>{item.project_title}</th>
                <td className="text-yellow-300 hover:text-yellow-500 font-semibold cursor-pointer	">
                  Visit
                </td>
                <td className="text-red-300 hover:text-red-500 font-semibold cursor-pointer	">
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
              <th>No Projects</th>
              <th>X</th>
              <th>X</th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableBugs;
