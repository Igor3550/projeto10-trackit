import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserToken from "../../contexts/UserToken";
import Header from "../Header";
import Menu from "../Menu";

import TrashIcon from '../../assets/images/trash.svg'

import { 
  Container,
  AddButton,
  AddArea,
  DayButton,
  Button,
  HabitArea
} from "./style";

const AddHabit = () => {
  return (
    <AddArea>
      <input placeholder="nome" />
      <span>
        <DayButton selected={true} >D</DayButton>
        <DayButton>S</DayButton>
        <DayButton>T</DayButton>
        <DayButton>Q</DayButton>
        <DayButton>Q</DayButton>
        <DayButton>S</DayButton>
        <DayButton>S</DayButton>
      </span>
      <div>
        <Button type="link" >Cancelar</Button>
        <Button>Salvar</Button>
      </div>
    </AddArea>
  )
}

const Habit = () => {
  return (
    <HabitArea>
      <h1>Ler 1 capitulo de livro</h1>
      <img src={TrashIcon} alt='' />
      <span>
        <DayButton selected={true} >D</DayButton>
        <DayButton>S</DayButton>
        <DayButton>T</DayButton>
        <DayButton>Q</DayButton>
        <DayButton>Q</DayButton>
        <DayButton>S</DayButton>
        <DayButton>S</DayButton>
      </span>
    </HabitArea>
  )
}

const HabitPage = () => {

  const { token } = useContext(UserToken);

  useEffect(() => {
    console.log('')
  }, [])

  return (
    <>
      <Header />
      <Container>
        <span>
          <h1>Meus hábitos</h1>
          <AddButton>+</AddButton>
        </span>
        <div>
          <AddHabit />
          <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </div>

        <Habit />
        <Habit />

      </Container>
      <Menu />
    </>
  )
}

export default HabitPage;