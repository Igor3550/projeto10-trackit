import Header from "../Header";
import Menu from "../Menu";

import CheckIcon from '../../assets/images/check.svg'

import {
  Container,
  Title,
  HabitArea,
  CheckBox,
  Text
} from './style'

const Habit = ({ checked=false }) => {

  const textColor = (checked ? '#8FC549' : '#666666')

  return (
    <HabitArea>
      <div>
        <h1>Ler 1 capitulo de livro</h1>
        <p>Sequência atual: <Text color={textColor} >3 dias</Text></p>
        <p>Seu recorde: 5 dias</p>
      </div>
      <CheckBox checked={checked}>
        <img src={CheckIcon} alt="" />
      </CheckBox>
    </HabitArea>
  )
}

const TodayPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>
          <h1>Segunda, 17/05</h1>
          <p>Nenhum hábito concluído ainda</p>
          <Text color='#8FC549'>67% dos hábitos concluídos</Text>
        </Title>

        <Habit />
        <Habit checked={true}/>
        <Habit />

      </Container>
      <Menu />
    </>
  )
}

export default TodayPage;