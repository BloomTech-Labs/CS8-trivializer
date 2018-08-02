import styled from "styled-components";

export const QuestionsWrapper = styled.div`
  /* display: flex; */
  flex-direction: column;
  justify-content: center;
  font-size: 1rem;
  /* border: 1px solid black; */
  align-items: center;
  font-size: 1.6rem;
  text-align: center;
  /* font-size: 1rem; */
  /* color: tomato; */
  
`;

export const CorrectAnswer = styled.div`
  font-weight: 900;
  font-size: 1.2rem;
  color: purple;
`;

export const QuestionsLine = styled.hr`
  border: 1rem solid orange;
`;
export const QuestionsOuterWrapper = styled.div``;

export const SubQuestionsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  /* border: 1px solid red; */
  margin: 10px;
  padding-bottom: 5px;
  align-items: center;
  /* :hover {
    box-shadow: 2px 8px 16px 16px rgba(0, 0, 0, 0.2);
  } */
  border-bottom: 1px solid black;
`;

// export const TestDiv = styled.div`
// display:none;
// `
