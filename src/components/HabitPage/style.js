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

export const AddArea = styled.div`
  width: 100%;
  
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;

  margin-bottom: 20px;

  &>div {
    display: flex;
    align-items: center;
    justify-content: end;
  }
  
  input {
    width: 100%;
    height: 45px;
    
    border: 1px solid #DBDBDB;
    border-radius: 5px;
    padding: 10px;
    
    font-size: 20px;
    
    &::placeholder {
      color: #DBDBDB;
    }
  }
  
  &>span {
    display: flex;
    margin: 10px 0;
  }
`;

export const DayButton = styled.button`
  width: 30px;
  height: 30px;
  margin: 2px;

  background-color: ${props => props.selected ? '#CFCFCF' : '#fff'};
  border: 1px solid #DBDBDB;
  border-radius: 5px;

  font-size: 20px;
  color: ${props => props.selected ? '#fff' : '#DBDBDB'};
`;

export const Button = styled.button`
  ${({type = 'normal'}) => {
    if(type === 'normal'){
      return `
        width: 85px;
        height: 35px;
        margin: 5px 0;
        border: 0;
        color: #fff;
        background-color: #52B6FF;
        font-size: 16px;
        border-radius: 5px;
      `;
    }else{
      return `
        font-size: 16px;
        color: #52B6FF;
        background-color: #fff;
        border: 0;
        border-radius: 5px;
        margin-right: 20px;
      `;
    }
  }}
`;

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