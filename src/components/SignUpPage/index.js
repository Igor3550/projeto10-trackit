import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signup } from '../../services/trackit';

import Logo from '../../assets/images/Group8.png';
import { 
  Container,
  Button
} from "./style";
import LoadingButton from '../LoadingButton';

const SignUpPage = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userImgUrl, setUserImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmitClick (e) {
    e.preventDefault()
    setLoading(true);

    const body = {
      email,
      name,
      image: userImgUrl,
      password
    }

    const promise = signup(body);
    promise.catch((error) => {
      setLoading(false);
      console.log(error);
      if(error.response.status === 409) {
        alert(`Usuário já cadastrado!`)
      }else{
        alert(`Ouve um erro inesperado: ${error.message}`)
      }
    })
    promise.then((res) => {
      setLoading(false);
      navigate('/');
    })
  }

  return (
    <>
    <Container>
      <img src={Logo} alt="" />
      <div>
        <form onSubmit={handleSubmitClick}>
        <input 
          disabled={loading}
          required
          type="email" 
          placeholder="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          disabled={loading}
          required
          type="password" 
          placeholder="senha" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        <input 
          disabled={loading}
          required
          type="text" 
          placeholder="nome" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          disabled={loading}
          required
          type="text" 
          placeholder="foto"
          value={userImgUrl} 
          onChange={(e) => setUserImageUrl(e.target.value)}
        />
        {loading ? <LoadingButton /> : <Button>Cadastrar</Button>}
        </form>
        <Button type="link" onClick={() => {navigate('/')}} >Já tem uma conta? Faça login!</Button>
      </div>
    </Container>
    </>
  )
}

export default SignUpPage;