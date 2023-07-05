import styled from "styled-components";
import { ReactComponent as logo } from "../images/slang.svg";
import { useNavigate } from "react-router-dom";
import Questions from "../utils/Questions";
import QuizContent from "../components/quizContent";
import { useState } from "react";

const Quiz = () => {
  let [count, setCount] = useState(0); // 문제 번호
  const navigate = useNavigate();

  let question = Questions.Q1[count];

  const handleNavigateHome = () => {
    navigate("/home");
  };

  const handleCountPlus = () => {
    if (count < 4) setCount(count + 1); // count++ 로 하면 딜레이 생겨서 count + 1로 해야한다.
  };

  const handleCountMinus = () => {
    if (count > 0) setCount(count - 1); // 문제수 아래로 count 내려가는거 막기
  };

  return (
    <>
      <Logo onClick={handleNavigateHome} />
      <QuizContent q={question} idx={count + 1} />
      <Center>
        <BtnContainer>
          <PrevBtn onClick={handleCountMinus}>이전 문제</PrevBtn>
          <NextBtn onClick={handleCountPlus}>다음 문제</NextBtn>
        </BtnContainer>
      </Center>
    </>
  );
};

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled(logo)`
  width: 5rem;
  margin-left: 2rem;
  cursor: pointer;
`;

const BtnContainer = styled.div``;

const PrevBtn = styled.button`
  background-color: #bac7ff;
  width: 160px;
  height: 50px;
  color: white;
  border-radius: 12px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  margin-top: 3rem;
  cursor: pointer;
`;

const NextBtn = styled(PrevBtn)`
  background-color: #6582fc;
  margin-left: 3rem;
`;

export default Quiz;
