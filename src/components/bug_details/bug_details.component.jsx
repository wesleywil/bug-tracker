import { useSelector, useDispatch } from "react-redux";

import DetailsSubTitle from "../details_subtitle/details_subtitle.component";

import { hide } from "../../redux/table_bugs/hideDetailsSlice";

const BugDetails = ({ btnName }) => {
  // Using Redux
  const hideDetails = useSelector((state) => state.hide_details.value);
  const bug = useSelector((state) => state.bugs.bug);
  const dispatch = useDispatch();

  return (
    <div className={`mt-2 ${hideDetails ? "hidden" : ""}  m-2 py-2`}>
      <h1 className="text-white text-3xl text-center mb-4">
        {bug ? bug.project_title : ""}
      </h1>
      <div className="text-sm	bg-violet-400 rounded-3xl font-semibold text-slate-900 p-2">
        <span className="m-2">Add Date: {bug ? bug.bug_add_date : ""}</span>
        <span className="float-right">
          Last Modification:
          {bug
            ? bug.bug_updated_date
              ? bug.bug_updated_date
              : "No modifications"
            : ""}
        </span>
      </div>
      <DetailsSubTitle text={"Info"} />
      <p className="text-center p-2">{bug ? bug.bug_info : ""}</p>
      <DetailsSubTitle text={"Status"} />
      <p className="text-center p-2">
        <span className=" px-3 py-1 bg-violet-400 text-xl font-semibold text-slate-900 rounded-full">
          {bug ? bug.status_title : ""}
        </span>
      </p>
      <DetailsSubTitle text={"Tags"} />
      <p className="text-center p-2">
        <span className="px-3 py-1 bg-violet-400 text-xl font-semibold text-slate-900 rounded-full">
          {bug ? bug.tag_title : ""}
        </span>
      </p>
      <DetailsSubTitle text={"Priority"} />
      <p className="text-center p-2">
        <span className="px-3 py-1 bg-violet-400 text-xl font-semibold text-slate-900 rounded-full">
          {bug ? bug.priority_title : ""}
        </span>
      </p>
      <div className="border-2 flex justify-center mt-2">
        <button
          onClick={() => dispatch(hide())}
          className="bg-slate-200 hover:bg-slate-300 active:bg-slate-500 text-slate-900 px-3 py-1 font-bold text-2xl m-2 rounded-3xl"
        >
          {btnName ? btnName : "Edit"}
        </button>
      </div>
    </div>
  );
};
export default BugDetails;
