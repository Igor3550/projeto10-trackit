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

  &>span{
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;

    h1 {
      font-size: 23px;
      color: #126BA5;
    }

  }

  &>div{
    width: 90%;

    p{
      color: #666666;
      font-size: 18px;
    }
  }
`;

export const AddButton = styled.button`
  width: 40px;
  height: 40px;

  background-color: #52B6FF;
  border: 0;
  border-radius: 5px;

  color: #fff;
  font-size: 27px;
`;

export const Loading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;