import "./App.css";
import Start from "./pages/start";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
