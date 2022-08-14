import { useSelector, useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";

import DetailsSubTitle from "../details_subtitle/details_subtitle.component";

import { hide } from "../../redux/table_bugs/hideDetailsSlice";

const BugDetails = ({ btnName }) => {
  // Using Redux
  const hideDetails = useSelector((state) => state.hide_details.value);
  const bug = useSelector((state) => state.bugs.bug);
  const dispatch = useDispatch();

  return (
    <div className={`mt-2 ${hideDetails ? "hidden" : ""} mt-2 `}>
      <button
        onClick={() => dispatch(hide())}
        className="float-right mr-2 text-2xl text-slate-600 bg-yellow-400 p-1 rounded-full"
      >
        <FaTimes />
      </button>
      <h1 className="text-white text-3xl text-center mb-4 border-b-2 pb-2">
        {bug ? bug.project_title : ""}
      </h1>
      <div className="flex justify-center gap-4 text-lg text-yellow-400  p-2">
        <span>Added In : {bug ? bug.bug_add_date : ""}</span>
        <span>Last Update: {bug ? bug.bug_updated_date : ""}</span>
      </div>
      <div className="text-center border-2 p-2 m-2 rounded-xl text-white">
        <p>{bug ? bug.bug_info : ""}</p>
      </div>
      <div className="flex flex-col gap-2 m-2 mb-4">
        <div className="text-center flex flex-col gap-2">
          <DetailsSubTitle text={"Tag"} />
          <span className="text-xl font-semibold text-slate-600 bg-yellow-400 mt-2 rounded-xl w-1/2 mx-auto">
            {bug ? bug.tag_title : ""}
          </span>
        </div>
        <div className="text-center flex flex-col gap-2">
          <DetailsSubTitle text={"Priority"} />
          <span className="text-xl font-semibold text-slate-600 bg-yellow-400 mt-2 rounded-xl w-1/2 mx-auto">
            {bug ? bug.priority_title : ""}
          </span>
        </div>
        <div className="text-center flex flex-col gap-2">
          <DetailsSubTitle text={"Status"} />
          <span className="text-xl font-semibold text-slate-600 bg-yellow-400 mt-2 rounded-xl w-1/2 mx-auto">
            {bug ? bug.status_title : ""}
          </span>
        </div>
      </div>
    </div>
  );
};
export default BugDetails;
