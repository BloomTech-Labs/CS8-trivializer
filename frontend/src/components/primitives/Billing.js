import styled from "styled-components";

export const BillingWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  border: solid black;
`;

export const BillingLabel = styled.div`
  /* font-size: 1.2rem; */
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const BillingInput = styled.div`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  :after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const BillingTitle = styled.div`
  margin-bottom: 20px;
  font-size: 1.8rem;
`;

export const BillingButton = styled.button`
  width: 40vw;
`;

export const BillingRadio = styled.div`
  margin: 10px 0;
`;

export const LogOut = styled.div`
  position: relative;
  bottom: 30px;
  font-size: 3rem;
`;
