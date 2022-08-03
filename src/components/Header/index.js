import Perfil from '../../assets/images/perfil_test.png'

import { 
  Container
} from "./style";

const Header = () => {
  return (
    <Container>
      <h1>
        TrackIt
      </h1>
      <img src={Perfil} alt='' />
    </Container>
  )
}

export default Header;