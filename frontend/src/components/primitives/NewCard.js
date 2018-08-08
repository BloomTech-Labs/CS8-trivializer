import styled from 'styled-components';

export const NewGameCardWrapper = styled.div`
    border-radius: 4%;
    font-size: 2rem;
    width: 280px;
    height: 280px;
    margin: 30px 6%;


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


