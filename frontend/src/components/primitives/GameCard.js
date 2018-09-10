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
  cursor: pointer;
}


    &:hover::after {
    opacity: 1;
}
`;

export const TopCard = styled.div`
  height: 76%;
`
export const TopCard2 = styled.div`
  
  height: 24%;
  width: 200px;
  position: fixed;
  left: 50px;
`

export const TextFormatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NameWrapper = styled.div`
  font-size: 3rem;
  margin: 4px;
  margin-top: 20px;
  font-weight: 1000;
  
`
export const DateWrapper = styled.div`
  font-size: 2rem;
  margin: 10px;
  width: 100%;
`

export const OutterDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  height: 150px;
  text-align: center;
`

export const IconContainer = styled.div`
 display: flex;
 align-items: flex-end;
 justify-content: center;
 height: auto;
 align-self: flex-end;
 position: fixed;
 bottom: 5px;
 right: 180px;

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
 width: 60%;
 height: auto;
 transition: all 1000ms;
 &:hover {
       transform: scale(1.3);
        cursor: pointer;
    }

`
export const ViewIcon = styled.img`
 width: 15%;
 height: auto;
 position: relative;
 top: 6px;
 
`

