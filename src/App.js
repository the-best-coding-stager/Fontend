import "./App.css";
import styled from "styled-components";
import { ReactComponent as Bg } from "./images/background.svg";

function App() {
  return (
    <div className="App">
      <BgImg />
    </div>
  );
}

const BgImg = styled(Bg)`
  background-position: top center;
  height: 100vh;
  width: 100vw;
  background-size: cover;
`;

export default App;
