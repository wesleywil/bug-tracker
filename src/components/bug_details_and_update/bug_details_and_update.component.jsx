import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import BugDetails from "../bug_details/bug_details.component";
import BugUpdate from "../bug_update/bug_update.component";

const BugDetailsAndUpdate = () => {
  const [updateBlock, setUpdateBlock] = useState(false);
  const [close, setClose] = useState(false);
  return (
    <div
      className={`rounded-xl bg-slate-900 mx-auto ${
        close ? "hidden" : ""
      }  border-2 w-1/2 mt-2 absolute top-1/4 left-1/4 z-50`}
    >
      <button
        onClick={() => setClose(!close)}
        className="float-right bg-white rounded-full text-red-600 text-2xl mb-1 mr-2 mt-1"
      >
        <FaTimes />
      </button>
      <BugDetails
        blockHidden={updateBlock}
        blockHiddenHandle={setUpdateBlock}
      />
      <BugUpdate blockHidden={updateBlock} blockHiddenHandle={setUpdateBlock} />
    </div>
  );
};

export default BugDetailsAndUpdate;
