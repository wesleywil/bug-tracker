import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/header/header.component";

//Pages
import Main from "./pages/main/main";
import ListBugs from "./pages/list_bugs/list_bugs";
import AddBug from "./pages/add_bug/add_bug";
import Projects from "./pages/projects/projects";

//Styles
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact="true" path="/" element={<Main />} />
        <Route exact="true" path="/bugs" element={<ListBugs />} />
        <Route exact="true" path="/new" element={<AddBug />} />
        <Route extact="true" path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
