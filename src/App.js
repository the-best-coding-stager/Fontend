import "./App.css";
import Start from "./pages/start";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />}></Route>
      </Routes>
    </>
  );
}

export default App;
