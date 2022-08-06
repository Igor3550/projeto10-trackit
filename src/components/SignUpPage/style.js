import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 180px;
    object-fit: cover;
  }

  &>div {
    width: 85%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    input {
      width: 100%;
      margin: 5px 0;
      padding: 0 5px;
      height: 45px;
      font-size: 20px;
      border: 1px solid #d4d4d4;
      border-radius: 5px;

      &::placeholder {
        color: #dbdbdb;
      }
    }
  }
`;

export const Button = styled.button`
  ${({type = 'normal'}) => {
    if(type === 'normal'){
      return `
        width: 100%;
        margin: 5px 0;
        height: 45px;
        border: 0;
        color: #fff;
        background-color: #52B6FF;
        font-size: 20px;
        border-radius: 5px;
      `;
    }else{
      return `
        width: 100%;
        font-size: 14px;
        color: #52B6FF;
        text-decoration: underline;
        background-color: #fff;
        border: 0;
        border-radius: 5px;
        margin-top: 10px;
      `;
    }
  }}
`;