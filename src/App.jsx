import "./App.css";
import Create from "./Components/Create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import Edit from "./components/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="read" element={<Read />} />
          <Route path="edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
