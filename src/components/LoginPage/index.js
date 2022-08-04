import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import UserToken from '../../contexts/UserToken';
import UserContext from '../../contexts/UserContext';

import { login } from '../../services/trackit';
import LoadingPage from '../LoadingPage';

import Logo from '../../assets/images/Group8.png'
import { 
  Container,
  Button
} from "./style";

const LoginPage = () => {
  const navigate = useNavigate();

  const { setToken } = useContext(UserToken);
  const { setUserContext } = useContext(UserContext);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false);

  function handleSubmit (e){
    e.preventDefault();
    setLoading(true)

    const body = {
      email,
      password
    }

    const promise = login(body);
    promise.catch((error) => {
      if(error.response.status === 401){
        alert(`Usuário e/ou senha incorreto(s)!`);
      }else{
        alert(`Ocorreu um erro inesperado: ${error.message}`);
      }
      console.log(error);
      setLoading(false)
    })
    promise.then((res) => {
      console.log(res.data)
      setToken(res.data.token);
      setUserContext(res.data);
      setLoading(false);
      navigate('/hoje');
    })
  }

  return (
    <>
    {loading ? <LoadingPage /> : ''}
    <Container>
      <img src={Logo} alt="" />
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            required
            type="email" 
            placeholder="email" 
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          />
          <input 
            required
            type="password" 
            placeholder="senha" 
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
          />
          <Button>Entrar</Button>
        </form>
        <Button type="link" onClick={() => {navigate('/cadastro')}} >Não tem uma conta? Cadastre-se!</Button>
      </div>
    </Container>
    </>
  )
}

export default LoginPage;