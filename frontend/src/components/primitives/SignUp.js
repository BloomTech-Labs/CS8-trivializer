import styled from "styled-components";


export const SignUpWrapper = styled.div`
   

    position: absolute; 
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    
    z-index: 1;
    max-width: 30%;
    height: 450px;
    background: white;
    border-radius: 2%;


`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 2%;

    
    /* border: solid black; */
`

export const LabelWrapper = styled.div`
 padding-top: 1.5rem;
 
`;

export const ButtonWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 padding-top: 20px;
 width: 100%;
`;

export const Button = styled.button`
 border-radius: 1%;
 height: 30px;
 width: 90%;
`;

export const LogButton = styled.button`
 border-radius: 2%;
 border: solid #83487e;
 background: white;
 font-weight: 900px;
 font-size: 2rem;
 color: #83487e;
    width: 100%;
    height: 40px;
`

export const Label = styled.label`
 font-weight: 900;
 font-size: 1rem;
 color: #83487e;
`;


export const Title = styled.h1`
 font-size: 4rem;
 font-weight: 900;
 color: #83487e;
`


export const Input = styled.input `
    width: 200px;
    padding: 6px;
    border-radius: 3%;
    border:thin solid #83487e;
`

export const Text = styled.p`
    font-size: 1.4rem;

`

export const TermsText = styled.p`
    font-size: 1rem;
`
export const Terms = styled.a`
    color: dodgerblue;
`