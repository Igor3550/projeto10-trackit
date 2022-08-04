import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 70px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  background-color: #fff;
  color: #52B6FF;
  position: fixed;
  left: 0;
  bottom: 0;

`;

export const CenterButton = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #52B6FF;
  font-size: 18px;
  color: #fff;
  border-radius: 50%;

  position: absolute;
  left: calc(50% - 45px);
  bottom: 10px;
`;