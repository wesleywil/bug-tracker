import { useEffect, useState } from "react";

import DetailsSubTitle from "../details_subtitle/details_subtitle.component";

import { selectBugByIdSimple, updateBug } from "../../server/bugs_table";
import { allPriorities } from "../../server/priorities_table";
import { allTags } from "../../server/tags_table";
import { allStatus } from "../../server/status_table";

const BugUpdate = ({ blockHidden, blockHiddenHandle, bug_id }) => {
  const [priorities, setPriorities] = useState([]);
  const [tags, setTags] = useState([]);
  const [status, setStatus] = useState([]);
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
    selectBugByIdSimple(bug_id).then((res) => {
      console.log(res);
      setBug(res[0]);
    });
    allStatus().then((res) => {
      setStatus(res);
    });
    allPriorities().then((res) => {
      setPriorities(res);
    });
    allTags().then((res) => {
      setTags(res);
    });
  }, [bug_id]);

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
    updateBug(data).then((res) => {
      console.log("UPDATE BUG!? ", res);
      location.reload();
    });
  };

  return (
    <div className={`mt-2 ${!blockHidden ? "hidden" : ""}  m-2 p-2`}>
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
            onClick={() => blockHiddenHandle(!blockHidden)}
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
