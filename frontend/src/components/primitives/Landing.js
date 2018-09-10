import styled from "styled-components";

import CrowdedBar from "./CrowdedBar.svg";

export const LandingWrapper = styled.div`
  height: 100vh;
`;
export const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  
  @media (max-width: 769px ) {
    flex-direction: column;
  }
`;
export const BotDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 10px;
  height: 80%;
`;

export const TitleWrap = styled.div`
   @media (max-width: 769px ) {
    display: flex;
    justify-content: center;
  }
`;

export const ButtonWrap = styled.div`
  width: 20%;
  @media (max-width: 769px ) {
    display: flex;
    justify-content: center;
    width: 100%;
  }

`;

export const Img = styled.div`
  background-image: url(${CrowdedBar});
  background-repeat: no-repeat;

  background-position: center top;
  background-attachment: fixed;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;

  background-size: cover;
  height: 100%;
`;
export const MainTitle = styled.h1`
  font-family: "Luckiest Guy", cursive;
  color: white;
  letter-spacing: 2px;
  padding-top: 10px;
  padding-left: 10px;
  
`;

export const SignInButton = styled.button`
  border: solid 6px white;
  color: white;
  background: #52132e;
  font-size: 2rem;
  font-weight: 900;
  height: 90px;
  width: 100%;
  border-radius: 3%;


  &:focus {
    outline: 0;
  }

  &:hover {
    color: #83487e;
    border: solid 6px #83487e;
    background: white;
    cursor: pointer;
  }

    @media (max-width: 769px ) {
    width: 40%;
    height: 70px;
  }

    /* @media (max-width: 635px) {
    
  } */
`;

export const SignUpButton = styled.button`
  border: solid 6px white;
  color: white;
  background: #52132e;
  font-size: 2.3rem;
  font-weight: 900;
  height: 120px;
  width: 30%;
  border-radius: 3%;
  margin-bottom: 10%;

  &:focus {
    outline: 0;
  }

  &:hover {
    background: white;
    color: #52132e;
    border: solid 6px #52132e;
    cursor: pointer;
  }

     @media (max-width: 769px ) {
    width: 40%;
    height: 70px;
  }

       @media (max-width: 493px ) {
    width: 50%;
    height: 70px;
  }

`;
