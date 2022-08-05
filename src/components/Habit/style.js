import styled from "styled-components";

export const HabitArea = styled.div`
  width: 100%;
  display: flex;

  margin: 10px 0;
  background-color: #fff;
  flex-direction: column;
  position: relative;
  border-radius: 5px;
  padding: 15px;
  
  h1 {
    font-size: 20px;
    color: #666666;
    margin-bottom: 10px;
  }
  img {
    width: 15px;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;