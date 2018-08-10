import styled from "styled-components";

export const CreateRoundCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

 
 
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


export const Label = styled.label`
  font-weight: 900;
  font-size: 1rem;
  color: white;
`;

export const Title = styled.h1`
 font-size: 3rem;
 font-weight: 900;
 color: white;
 margin-bottom: 10px;
`;

export const Input = styled.input `
    width: 200px;
    padding: 6px;
    border-radius: 3%;
    border:thin solid #83487e;
`
export const Select = styled.select `
    width: 200px;
    padding: 6px;
    border-radius: 3%;
    border:thin solid #83487e;
`

export const FormWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 50vh;
width: 35%;
background: #571633;
border-radius: 3%;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

`
export const Button = styled.button`
align-self: auto;
 border-radius: 2%;
 border: solid #83487e;
 background: white;
 font-weight: 900px;
 font-size: 2rem;
 color: #83487e;
 margin-top: 15px;
    width: 90%;
    height: 40px;

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

export const Upgrade = styled.p`
    font-weight: 900;
    color: gold;

  &:hover {
        background: white;
        cursor: pointer;
    }
`

export const PositionMenu = styled.div`
    width: 100px; 
    position: absolute;
    z-index: 1; 
    top: 0;
    left: 0;
    
    overflow-x: hidden; 
    padding: 10px;
    
    transition:  0.5s; 

`