import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/images/Group8.png'

import { 
  Container,
  Button
} from "./style";

const LoginPage = () => {
  const navigate = useNavigate()

  function handleSignUpClick () {
    navigate('/cadastro')
  }

  return (
    <Container>
      <img src={Logo} alt="" />
      <div>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="senha" />
        <Button>Entrar</Button>
        <Button type="link" onClick={handleSignUpClick} >Não tem uma conta? Cadastre-se!</Button>
      </div>
    </Container>
  )
}

export default LoginPage;