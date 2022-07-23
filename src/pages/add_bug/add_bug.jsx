const AddBug = () => {
  return (
    <div className="p-2 bg-slate-900/80 h-screen">
      <h1 className="text-3xl text-white font-semibold text-center border-b-2">
        New Bug
      </h1>
      <div className="border-2 rounded-2xl p-2 mt-2 xl:w-1/3 sm:w-1/2 mx-auto">
        <form className="flex flex-col text-xl text-white">
          <span className="font-semibold">Project Name</span>
          <select className="bg-slate-600 px-2 py-1 font-bold">
            <option>Project 1</option>
            <option>Project 2</option>
            <option>Project 3</option>
          </select>
          <span className="font-semibold">Info</span>
          <textarea
            className="bg-slate-600 px-2 py-1 font-bold"
            placeholder="Write some info about the bug you are facing"
          ></textarea>
          <span className="font-semibold">Tag</span>
          <select className="bg-slate-600 px-2 py-1 font-bold">
            <option>FrontEnd</option>
            <option>Backend</option>
          </select>
          <span className="font-semibold">Status</span>
          <select className="bg-slate-600 px-2 py-1 font-bold">
            <option>Open</option>
            <option>In Progress</option>
            <option>Reviewing</option>
            <option>Closed</option>
          </select>
          <span className="font-semibold">Priority</span>
          <select className="bg-slate-600 px-2 py-1 font-bold">
            <option>High</option>
            <option>Normal</option>
            <option>Low</option>
          </select>
          <div className="flex gap-2 mt-2 justify-center">
            <button className="text-2xl font-bold rounded-xl px-2 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-700 text-slate-900">
              Submit
            </button>
            <button
              type="button"
              className="text-2xl font-bold rounded-xl px-2 bg-red-400 hover:bg-red-500 active:bg-red-700 text-slate-900"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBug;
