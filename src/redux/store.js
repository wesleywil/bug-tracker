import { configureStore } from "@reduxjs/toolkit";
import hideDetailsReducer from "./table_bugs/hideDetailsSlice";
import hideUpdateReducer from "./table_bugs/hideUpdateSlice";
import hideDeleteReducer from "./table_bugs/hideDeleteSlice";
import hideProjectFormReducer from "./projects/hideProjectFormSlice";
import hideProjectFormEditReducer from "./projects/hideProjectFormEditSlice";
import hideBugFormReducer from "./bugs/hideBugFormSlice";

export const store = configureStore({
  reducer: {
    hide_details: hideDetailsReducer,
    hide_update: hideUpdateReducer,
    hide_delete: hideDeleteReducer,
    hide_project_form: hideProjectFormReducer,
    hide_project_form_edit: hideProjectFormEditReducer,
    hide_bug_form: hideBugFormReducer,
  },
});
