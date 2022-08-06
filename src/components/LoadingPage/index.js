import styled from "styled-components";
import { useEffect, useState } from "react";
import { ThreeDots } from 'react-loader-spinner'

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0,0,0, 0.2);
  position: fixed;
  transition: all 0.2s linear;
  opacity: ${props => props.opacity ? props.opacity : 0};
  z-index: 10;
  left: 0;
  top: 0;

  div {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 20px;
    background-color: #fff;
  }
`;

const LoadingPage = () => {

  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setOpacity(1)
  }, [])

  return (
      <Container opacity={opacity} >
        <div>
          <ThreeDots color="#00BFFF" height={60} width={60} />
        </div>
      </Container>
  )
}

export default LoadingPage;