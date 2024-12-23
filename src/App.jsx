import "./App.css";
import Create from "./Components/Create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./components/Read";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="read" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
