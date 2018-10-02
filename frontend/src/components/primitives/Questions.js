import styled from "styled-components";


export const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  /* height: 100vh; */
  height: auto;
  font-size: 2rem;
  /* color: tomato; */
`

export const OuterMostWrapper = styled.div`
  /* border: solid yellow; */
`


export const Bold = styled.p`
  font-size: 2rem; 
  color: white;
  /* margin: 20px; */
`

export const TestDiv = styled.div`
  margin: 0 auto;
`

export const Text = styled.p `
  font-size: 3rem;
`

export const QuestionsLine = styled.hr`
  border: 1rem solid orange;
` 

export const QuestionCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 50%;
  background: #696969;
  border-radius: 0.5%;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

`
export const ButtonWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 15%;
  /* border: solid black; */
  margin: 20px;
`
 export const QuestionsText = styled.div`
  margin: 5px;
  font-size: 3rem;
  font-weight: 900;
  color: white;
 `

// export const DifficultyText = styled.div`
//   margin: 5px;
//   font-size: 3rem;
//   color: white
//   font-weight: 900;
// `


export const PositionMenu = styled.div`
  width: 100px;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;


  overflow-x: hidden;
  padding: 10px;

  transition: 0.5s;
`;
