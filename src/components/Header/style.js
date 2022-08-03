import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 70px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  background-color: #126BA5;
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;

  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);

  h1 {
    font-family: 'Playball', cursive;
    font-size: 40px;
  }
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
  }
`;