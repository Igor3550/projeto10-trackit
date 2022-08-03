import Header from "../Header";
import Menu from "../Menu";

import { Container } from "./style";

const HistoryPage = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <h1>Histórico</h1>
          <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </div>
      </Container>
      <Menu />
    </>
  )
}

export default HistoryPage;