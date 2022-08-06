import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import DetailsSubTitle from "../details_subtitle/details_subtitle.component";

import { selectBugByIdSimple, updateBug } from "../../server/bugs_table";

import { hide } from "../../redux/table_bugs/hideUpdateSlice";
import { fetchTags } from "../../redux/tags/tagsSlice";
import { fetchPriorities } from "../../redux/priorities/prioritiesSlice";
import { fetchStatus } from "../../redux/status/statusSlice";
import { updated, completed } from "../../redux/status_toast/status_toastSlice";

const BugUpdate = ({ bug_id }) => {
  // Using Redux
  const hideUpdate = useSelector((state) => state.hide_update.value);
  const tags = useSelector((state) => state.tags.tags);
  const priorities = useSelector((state) => state.priorities.priorities);
  const status = useSelector((state) => state.status.arrStatus);
  const dispatch = useDispatch();

  const [bug, setBug] = useState({
    id: "",
    info: "",
    project_id: "",
    priority_id: "",
    status_id: "",
    tag_id: "",
    add_date: "",
    updated_date: "",
  });

  useEffect(() => {
    console.log("Useeffect from Bug_Update_Component");
    dispatch(fetchPriorities());
    dispatch(fetchStatus());
    dispatch(fetchTags());

    selectBugByIdSimple(bug_id).then((res) => {
      console.log(res);
      setBug(res[0]);
    });
  }, [dispatch, bug_id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: bug_id,
      info: event.target.elements.info.value,
      priority_id: event.target.elements.priority_id.value,
      status_id: event.target.elements.status_id.value,
      tag_id: event.target.elements.tag_id.value,
    };
    console.log("UPDATED DATA=>", data);
    updateBug(data).then(() => {
      dispatch(updated());
      dispatch(hide());
      setTimeout(() => {
        dispatch(completed());
        location.reload();
      }, 3000);
    });
  };

  return (
    <div className={`mt-2 ${!hideUpdate ? "hidden" : ""}  m-2 p-2`}>
      <form onSubmit={handleSubmit}>
        <DetailsSubTitle text={"Update"} />
        <textarea
          className="text-center w-full mt-2 bg-slate-600 text-white p-2 border-2"
          defaultValue={bug ? bug.info : ""}
          id="info"
        ></textarea>

        <DetailsSubTitle text={"Status"} />
        <select
          className="mt-2 rounded-xl w-full text-xl px-2 py-1 bg-slate-600 text-white "
          defaultValue={bug ? bug.status_id : ""}
          id="status_id"
        >
          <option value="0" disabled>
            Select Status
          </option>
          {status.length
            ? status.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))
            : ""}
        </select>

        <DetailsSubTitle text={"Tags"} />

        <select
          className="mt-2 rounded-xl w-full text-xl px-2 py-1 bg-slate-600 text-white "
          defaultValue={bug ? bug.tag_id : ""}
          id="tag_id"
        >
          <option value="0" disabled>
            Select Tags
          </option>
          {tags.length
            ? tags.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))
            : ""}
        </select>

        <DetailsSubTitle text={"Priority"} />
        <select
          className="mt-2 rounded-xl w-full text-xl px-2 py-1 bg-slate-600 text-white "
          defaultValue={bug ? bug.priority_id : ""}
          id="priority_id"
        >
          <option value="0" disabled>
            Select Priority
          </option>
          {priorities.length
            ? priorities.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))
            : ""}
        </select>

        <div className="border-2 flex justify-center mt-2">
          <button className="bg-slate-200 hover:bg-slate-300 active:bg-slate-500 text-slate-900 px-3 py-1 font-bold text-2xl m-2 rounded-3xl">
            Save
          </button>
          <button
            type="button"
            onClick={() => dispatch(hide())}
            className="bg-slate-200 hover:bg-slate-300 active:bg-slate-500 text-slate-900 px-3 py-1 font-bold text-2xl m-2 rounded-3xl"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BugUpdate;
