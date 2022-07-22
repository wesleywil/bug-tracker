import DetailsSubTitle from "../details_subtitle/details_subtitle.component";

const BugUpdate = ({ blockHidden, blockHiddenHandle }) => {
  return (
    <div className={`mt-2 ${!blockHidden ? "hidden" : ""}  m-2 p-2`}>
      <DetailsSubTitle text={"Update"} />
      <textarea
        className="text-center w-full mt-2 bg-slate-600 text-white p-2 border-2"
        rows={10}
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </textarea>

      <DetailsSubTitle text={"Status"} />
      <select className="mt-2 rounded-xl w-full text-xl px-2 py-1 bg-slate-600 text-white ">
        <option value="0" disabled>
          Select Status
        </option>
        <option value="open">Open</option>
        <option value="in_progress">In Progress</option>
        <option value="reviewing">Reviewing</option>
        <option value="closed">Closed</option>
      </select>

      <DetailsSubTitle text={"Tags"} />

      <select className="mt-2 rounded-xl w-full text-xl px-2 py-1 bg-slate-600 text-white ">
        <option value="0" disabled>
          Select Tags
        </option>
        <option value="frontend">Front End</option>
        <option value="backend">Backend</option>
      </select>

      <DetailsSubTitle text={"Priority"} />
      <select className="mt-2 rounded-xl w-full text-xl px-2 py-1 bg-slate-600 text-white ">
        <option value="0" disabled>
          Select Priority
        </option>
        <option value="high" className="bg-red-500 font-semibold">
          High
        </option>
        <option value="normal" className="bg-yellow-600 font-semibold">
          Normal
        </option>
        <option value="low" className="bg-violet-400 font-semibold">
          Low
        </option>
      </select>

      <div className="border-2 flex justify-center mt-2">
        <button className="bg-slate-200 hover:bg-slate-300 active:bg-slate-500 text-slate-900 px-3 py-1 font-bold text-2xl m-2 rounded-3xl">
          Save
        </button>
        <button
          onClick={() => blockHiddenHandle(!blockHidden)}
          className="bg-slate-200 hover:bg-slate-300 active:bg-slate-500 text-slate-900 px-3 py-1 font-bold text-2xl m-2 rounded-3xl"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BugUpdate;
