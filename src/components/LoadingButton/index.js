import styled from "styled-components";
import { ThreeDots } from 'react-loader-spinner'

const Button = styled.div`
  width: ${props => props.width};
  margin: 5px 0;
  height: ${props => props.height};
  border: 0;
  color: #fff;
  background-color: #52B6FF;
  font-size: 20px;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingButton = ({ width='100%', height='45px', iconSize=80 }) => {
  return (
    <Button width={width} height={height}>
      <ThreeDots color="#fff" width={iconSize} height={iconSize} />
    </Button>
  )
}

export default LoadingButton;