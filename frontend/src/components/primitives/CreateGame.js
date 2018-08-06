import styled from "styled-components";

export const CreateGameWrapper = styled.div`
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

export const Button = styled.button`
 border-radius: 1%;
 height: 30px;
 width: 90%;
`;

export const Label = styled.label`
 font-weight: 900;
 font-size: 1rem;
 color: white;
`;


export const Title = styled.h1`
 font-size: 2rem;
 font-weight: 900;
 color: white;
`

export const GameCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  /* width: 100vw; */
  height: 100%;
  overflow: auto;
`
export const RoundButtonWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 padding-top: 20px;
`;

export const RoundButton = styled.div`
 text-align: center;
 border-radius: 1%;
 height: 30px;
 width: 100px;
 color: white;
 font-weight: 900;
 font-size: 1.2rem;
 padding-top: 5px;
`;

export const AddIcon = styled.img`
    border-radius: 50%;
    width: 30%;
    height: auto;

    &:hover {
        background: greenyellow;
        cursor: pointer;
    }
  
`
export const BigPlusWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const NewRWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const AddIconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    height: 100%;
`;

export const Text = styled.p`

`
export const TextWrapper = styled.div`
    /* display: flex;
    justify-content: center;
    height: 50%; */
`
export const CGListWrapper = styled.div` 
    display: flex;
    /* width: 100%; */
    height: 100vh;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;

    /* border: solid black; */

`

export const TopContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    height: auto;

    /* border: solid black; */
`

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative; 
    right: 30px;

    /* border: solid black; */
    /* width: 100%; */
`

export const NewRoundButton = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background: white;

      &:focus{
        outline:0;
    }

    &:hover {
        background: greenyellow;
        cursor: pointer;
    }

`