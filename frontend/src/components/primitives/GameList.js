import styled from 'styled-components';

export const GameWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
`
export const ListWrapper = styled.div` 
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: scroll;
    flex-wrap: wrap;

    width:50%;
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