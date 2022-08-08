import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 70px 0;

  background-color: #f2f2f2;

  &>div {
    width: 90%;

    h1 {
      font-size: 23px;
      color:#126BA5;
      margin: 25px 0;
    }

    p{
      font-size: 18px;
      color: #666666;
    }

    &>div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;