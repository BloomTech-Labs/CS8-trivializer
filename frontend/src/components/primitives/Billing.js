import styled from "styled-components";

export const BillingWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items:center;
  height: 100vh;
    
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  width: 60%;
  background: darkgrey;
  border-radius: 2%;
`
export const PriceDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 40%;
  height: 350px;
  background: beige;
  border-radius: 1%;
  margin: 10px;

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

  /* border: solid black; */
`
export const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0.5%;
  height: 85%;
  /* border: solid red; */
`
export const Bot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 15%;
  background: #999999;
  border-radius: 0.5%;

`
export const Title = styled.div`
  font-size: 3.5rem;
  height: 60%;
  width: 100%;
  background: #999999;
  border-radius: 1%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Li = styled.div`
  font-size: 1.7rem;
  margin-bottom: 20px;
`
export const Price = styled.div`
  font-size: 5rem;
  font-weight: 800;
  height: 70%;
  text-align: center;
  display: flex;
  align-items:center;
  justify-content: center;

  /* border: solid ; */
`
export const Button = styled.div`
  text-align: center;
  font-size: 2rem;
  border: solid black;
  width: 100px;
  padding: 6px;
  border-radius: 3%;

      &:focus{
        outline:0;
    }

      &:hover {
        background: white;
        cursor: pointer;
    }
`