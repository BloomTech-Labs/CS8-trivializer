import styled from 'styled-components';

export const GameCardWrapper = styled.div`
   display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 4%;
    font-size: 2rem;
    width: 250px;
    height: 280px;
    margin: 30px 2%;
    padding: 0 5px;


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


export const IconContainer = styled.div`
 display: flex;
 align-items: flex-end;
 justify-content: center;
 height: auto;
 align-self: flex-end;
 position: relative;
 top: 80px;

 /* border: solid black; */

`

export const ViewIconWrapper = styled.div`
/* display: flex; */

 /* align-items: flex-end; */
`;

export const TrashIconWrapper = styled.div`
 /* display: flex;
 justify-content: center;
 align-items: center;
 padding-top: 20px; */
`;

export const TrashIcon = styled.img`
 width: 80%;
 height: auto;
`
export const ViewIcon = styled.img`
 width: 15%;
 height: auto;
 position: relative;
 top: 6px;
 
`

