import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Logo from '../../assets/images/Group8.png';
import { 
  Container,
  Button
} from "./style";

const SignUpPage = () => {
  const navigate = useNavigate()

  function handleLoginClick () {
    navigate('/')
  }

  return (
    <Container>
      <img src={Logo} alt="" />
      <div>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="senha" />
        <input type="text" placeholder="nome" />
        <input type="text" placeholder="foto" />
        <Button>Cadastrar</Button>
        <Button type="link" onClick={handleLoginClick} >Já tem uma conta? Faça login!</Button>
      </div>
    </Container>
  )
}

export default SignUpPage;