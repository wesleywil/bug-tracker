import { useEffect, useState } from "react";
import { selectBugsForProject } from "../../server/projects_db_table";
const BugBadge = ({ status, color, project_id }) => {
  const [bugs, setBugs] = useState([]);
  useEffect(() => {
    selectBugsForProject(project_id, status).then((res) => {
      setBugs(res.data);
    });
  });

  return (
    <div className="flex flex-col border-2 p-2 text-center rounded-xl bg-slate-700  font-semibold">
      <span className={color}>{status}</span>
      <span className={color}>{bugs.length}</span>
    </div>
  );
};

export default BugBadge;
