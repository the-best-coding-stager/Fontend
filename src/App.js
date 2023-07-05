import Start from "./pages/start";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Home from "./pages/home";
import Post from "./pages/post";
import QuizStart from "./pages/quizStart";
import Quiz from "./pages/quiz";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/quizstart" element={<QuizStart />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </>
  );
}

export default App;
