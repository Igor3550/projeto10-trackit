import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import UserHabitsPercentage from "../../contexts/UserHabitsPercentage";

import {
  Container,
  CenterButton
} from "./style";

const Menu = () => {
  const navigate = useNavigate()

  const { habitsPercentage, setHabitPercentage } = useContext(UserHabitsPercentage);

  return (
    <Container>
      <div onClick={() => { navigate('/habitos') }}>
        <p>Hábitos</p>
      </div>
      <CenterButton onClick={() => { navigate('/hoje') }}>
        <CircularProgressbar
          value={habitsPercentage}
          maxValue={100}
          minValue={0}
          text={`Hoje`}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#52B6FF",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent"
          })}
        />
      </CenterButton>
      <div onClick={() => { navigate('/historico') }}>
        <p>Histórico</p>
      </div>
    </Container>
  )
}

/*
<CircularProgressbar
  value={percentage}
  text={`${percentage}%`}
  background
  backgroundPadding={6}
  styles={buildStyles({
    backgroundColor: "#3e98c7",
    textColor: "#fff",
    pathColor: "#fff",
    trailColor: "transparent"
  })}
/>*/

export default Menu;