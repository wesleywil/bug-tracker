import DetailsSubTitle from "../details_subtitle/details_subtitle.component";

const BugDetails = ({ blockHiddenHandle, blockHidden }) => {
  return (
    <div className={`mt-2 ${blockHidden ? "hidden" : ""}  m-2 p-2`}>
      <DetailsSubTitle text={"Info"} />
      <p className="text-center p-2">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
      <DetailsSubTitle text={"Status"} />
      <p className="text-center p-2">
        <span className=" px-3 py-1 bg-green-400 text-xl font-semibold text-slate-900 rounded-full">
          Open
        </span>
      </p>
      <DetailsSubTitle text={"Tags"} />
      <p className="text-center p-2">
        <span className="px-3 py-1 bg-violet-400 text-xl font-semibold text-slate-900 rounded-full">
          FrontEnd
        </span>
      </p>
      <DetailsSubTitle text={"Priority"} />
      <p className="text-center p-2">
        <span className="px-3 py-1 bg-red-600 text-xl font-semibold text-slate-100 rounded-full">
          High
        </span>
      </p>
      <div className="border-2 flex justify-center mt-2">
        <button
          onClick={() => blockHiddenHandle(!blockHidden)}
          className="bg-slate-200 hover:bg-slate-300 active:bg-slate-500 text-slate-900 px-3 py-1 font-bold text-2xl m-2 rounded-3xl"
        >
          Update
        </button>
      </div>
    </div>
  );
};
export default BugDetails;
