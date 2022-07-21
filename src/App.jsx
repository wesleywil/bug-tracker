import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/header/header.component";

//Pages
import Main from "./pages/main/main";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact="true" path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
