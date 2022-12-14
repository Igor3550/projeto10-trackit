import MyCalendar from "../MyCalendar";
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
          <div>
            <MyCalendar />
          </div>
        </div>
      </Container>
      <Menu />
    </>
  )
}

export default HistoryPage;