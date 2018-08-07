import styled from "styled-components";

export const CorrectAnswerPdf = styled.div`
  font-weight: 900;
  font-size: 2.4rem;
`;

export const PdfWrapper = styled.div`
  border: 1px solid black;
  font-size: 1.4rem;
  /* margin: 50px; */
  margin-top: 50px;
  /* color: tomato; */
`;


export const GameName = styled.h1`
  color: black;
  font-weight: 900;
  font-size: 4rem;
`;

export const RoundName = styled.div`
  font-weight: 500;
  font-size: 3rem;
`;

export const Button = styled.button`
  border-radius: 2%;
  border: solid #83487e;
  background: white;
  font-weight: 900px;
  font-size: 2rem;
  color: #83487e;
  width: 100%;
  height: 40px;
  &:hover {
        background:#006578;
        color: white;
    }
    &:focus{
        outline:0;
    }
`;

export const PdfHeading = styled.div`
  margin: 0;
`;

export const PdfQuestion = styled.div`
  color: black;
  font-size: 3rem;
`;

export const BlankLine = styled.div`
  margin-top: 20px;
`;
