import Header from "../Header";
import Menu from "../Menu";

import { 
  Container
} from "./style";

const AddHabit = () => {
  return (
    <div>
      <input placeholder="nome" />
      <span>
        <button>D</button>
        <button>S</button>
        <button>T</button>
        <button>Q</button>
        <button>Q</button>
        <button>S</button>
        <button>S</button>
      </span>
      <span>
        <button>cancelar</button>
        <button>salvar</button>
      </span>
    </div>
  )
}

const HabitPage = () => {
  return (
    <>
      <Header />
      <Container>
        <span>
          <h1>Meus hábitos</h1>
          <button>+</button>
        </span>
        <div>
          <AddHabit />
          <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </div>
      </Container>
      <Menu />
    </>
  )
}

export default HabitPage;