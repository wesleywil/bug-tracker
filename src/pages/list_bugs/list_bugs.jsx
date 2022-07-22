import TableBugs from "../../components/table_bugs/table_bugs.component";
import BugDetailsAndUpdate from "../../components/bug_details_and_update/bug_details_and_update.component";

const ListBugs = () => {
  return (
    <div className="p-2 bg-slate-900/80">
      <h1 className="text-3xl text-white font-semibold text-center border-b-2">
        List Bugs
      </h1>
      <div className="border-2 p-2 mt-2">
        <TableBugs />
      </div>
      <BugDetailsAndUpdate />
    </div>
  );
};

export default ListBugs;
