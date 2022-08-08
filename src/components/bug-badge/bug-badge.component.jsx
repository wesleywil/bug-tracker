import { useEffect, useState } from "react";
import { selectBugsFromProject } from "../../server/bugs_table";
const BugBadge = ({ status, color, project_id }) => {
  const [bugs, setBugs] = useState([]);
  useEffect(() => {
    selectBugsFromProject(project_id, status).then((res) => {
      setBugs(res.data);
    });
  }, [bugs]);

  return (
    <div className="flex flex-col border-2 p-2 text-center rounded-xl bg-slate-700  font-semibold">
      <span className={color}>{status}</span>
      <span className={color}>{bugs.length}</span>
    </div>
  );
};

export default BugBadge;
