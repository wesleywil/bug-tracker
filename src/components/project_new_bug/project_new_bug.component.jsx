const ProjectNewBug = ({ name, handleForm, hidden, setHidden }) => {
  return (
    <form className="flex flex-col text-xl text-white" onSubmit={handleForm}>
      <h1 className="font-semibold text-center">{name}</h1>
      <span className="font-semibold">Info</span>
      <textarea
        className="bg-slate-600 px-2 py-1 font-bold"
        placeholder="Write some info about the bug you are facing"
        id="info"
      ></textarea>
      <span className="font-semibold">Tag</span>
      <select className="bg-slate-600 px-2 py-1 font-bold" id="tag_id">
        <option value="1">FrontEnd</option>
        <option value="2">Backend</option>
      </select>
      <span className="font-semibold">Priority</span>
      <select className="bg-slate-600 px-2 py-1 font-bold" id="priority_id">
        <option value="1">High</option>
        <option value="2">Normal</option>
        <option value="3">Low</option>
      </select>
      <div className="flex gap-2 mt-2 justify-center">
        <button className="text-2xl font-bold rounded-xl px-2 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-700 text-slate-900">
          Submit
        </button>
        <button
          type="button"
          className="text-2xl font-bold rounded-xl px-2 bg-red-400 hover:bg-red-500 active:bg-red-700 text-slate-900"
          onClick={() => setHidden(!hidden)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProjectNewBug;
