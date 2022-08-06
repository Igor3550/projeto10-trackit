import styled from "styled-components";

export const HabitArea = styled.div`
  width: 90%;
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
  padding: 10px;
  border-radius: 5px;

  div {
    h1 {
      font-size: 20px;
      color: #666666;
    }
    p{
      font-size: 13px;
      color: #666666;
    }
  }

`;

export const Text = styled.span`
  color: ${props => props.color ? props.color : '#666666'};
`;

export const CheckBox = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.checked ? '#8FC549' : '#EBEBEB'};
  border-radius: 10px;
`;