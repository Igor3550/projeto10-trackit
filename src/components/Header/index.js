import { useContext } from 'react';
import UserContext from '../../contexts/UserContext'

import { 
  Container
} from "./style";

const Header = () => {

  const { userContext } = useContext(UserContext);

  return (
    <Container>
      <h1>
        TrackIt
      </h1>
      <img src={userContext.image} alt='Perfil' />
    </Container>
  )
}

export default Header;