import styled from "styled-components";

export const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
 
`;

export const LabelWrapper = styled.div`
  margin-top: 1.5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
`;

export const Label = styled.label`
  font-weight: 900;
  color: white;
  font-size: 1.3rem;
  margin: 3px;
`;



export const Title = styled.h1`
 font-size: 3rem;
 font-weight: 900;
 color: white;
 margin-bottom: 10px;
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
    margin-top: 30px;

      &:focus{
        outline:0;
    }

      &:hover {
        /* background: #006578; */
        border: solid white;
        background: #BE5D4C;
        color: white;
        cursor: pointer;
    }
`

export const FormWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: auto;
width: 35%;
padding: 2% 0;
background: #571633;
border-radius: 3%;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

@media (max-width: 741px) {
  width: 60%;
}

@media (max-width: 467px) {
  width: 90%;
}

@media (max-width: 324px) {
  width: 100%;
  border-radius: 0%;
}
`
export const Input = styled.input `
    width: 200px;
    padding: 6px;
    border-radius: 3%;
    border:thin solid #83487e;
    padding: 3px;
`
export const PositionMenu = styled.div`
    /* border: solid red; */
     /* height: 100%;  */
    width: 100px; 
    position: absolute;
    z-index: 1; 
    top: 0;
    left: 0;
    
    overflow-x: hidden; 
    padding: 10px;
    
    transition:  0.5s; 

`