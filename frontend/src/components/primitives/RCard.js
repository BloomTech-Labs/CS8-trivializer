import styled from "styled-components";

export const RCardWrapper = styled.div`
   display: flex;
    flex-direction: column;
    justify-content: center;
    
    border-radius: 4%;
    font-size: 2rem;
    width: 280px;
    height: auto;
    margin: 30px 30px;


    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);


  &:after {
  content: "";
  border-radius: 5px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  opacity: 0;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

    &:hover {
  -webkit-transform: scale(1.15, 1.15);
  transform: scale(1.15, 1.15);
}

    &:hover::after {
    opacity: 1;
}
`;

export const LabelWrapper = styled.div`
  padding-top: 1.5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

export const Button = styled.button`
  border-radius: 1%;
  height: 30px;
  width: 90%;
`;

export const Label = styled.label`
  font-weight: 900;
  font-size: 1.3rem;
  /* color: white; */
`;

export const TitleLabel = styled.label`
  font-weight: 900;
  font-size: 2rem;
  /* color: white; */
  position: relative;
  top: 15px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  /* color: white; */
`;

export const Select = styled.select`
  width: 80%;
  /* padding: 12px; */
  border-radius: 4px;
  resize: vertical;
`

export const Input = styled.input`
  width: 20%;
  /* padding: 12px; */
  border-radius: 4px;
  resize: vertical;
`

export const IconContainer = styled.div`
 display: flex;
 align-items: flex-end;
 justify-content: center;
 height: 30%;
 align-self: flex-end;
`

export const ViewIconWrapper = styled.div`

`;

export const TrashIconWrapper = styled.div`

`;

export const TrashIcon = styled.img`
 width: 80%;
 height: auto;
 position: relative;
 left: 5px;
`
export const ViewIcon = styled.img`
 width: 15%;
 height: auto;
 position: relative;
 top: 6px;
 
`
export const RedoIcon = styled.img`
 width: 30%;
 height: auto;
 position: relative;
 top: 6px;
 left: 45px;
 /* padding-right: 8px; */
 padding-bottom: 5px;
`

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 25px;
  /* resize: vertical;
  height: auto; */
`


