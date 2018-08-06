import styled from 'styled-components';

export const GameWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
`
export const ListWrapper = styled.div` 
    display: flex;
    
    height: 100vh;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    width: 100%;
    

    
`

export const NGW = styled.h1`
    font-size: 4rem;
`
export const ButtonWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 padding-top: 20px;
`;

export const Button = styled.div`
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
    background: white;
    width: 30%;
    height: auto;

      &:hover {
        background: greenyellow;
        cursor: pointer;
    }
`


export const AddIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.p`

`
export const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
`


export const NewGameDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
`
export const NewGameButton = styled.img`
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

export const NewWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NameWrapper = styled.div`
  font-size: 3rem;
  margin: 4px;
  margin-top: 20px;
  font-weight: 800;
  
`