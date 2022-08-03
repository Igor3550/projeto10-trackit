import Logo from '../../assets/images/Group8.png'

import { 
  Container,
  Button
} from "./style";

const LoginPage = () => {
  return (
    <Container>
      <img src={Logo} alt="" />
      <div>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="senha" />
        <Button>Entrar</Button>
        <Button type="link" >Não tem uma conta? Cadastre-se!</Button>
      </div>
    </Container>
  )
}

export default LoginPage;