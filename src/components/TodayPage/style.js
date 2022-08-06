import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 79vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 70px 0;

  background-color: #f2f2f2;

`;

export const Title = styled.div`
  width: 90%;
  margin: 25px 0;

   h1 {
    font-size: 23px;
    color: #126BA5;
    padding-bottom: 5px;
   }
   p{
    font-size: 18px;
    color: #BABABA;
   }
`;

export const Text = styled.span`
  color: ${props => props.color ? props.color : '#666666'};
`;