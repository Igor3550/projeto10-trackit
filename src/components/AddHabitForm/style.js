import styled from "styled-components";

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