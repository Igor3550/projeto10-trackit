import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserToken from "../../contexts/UserToken";
import { getHabits } from "../../services/trackit";

import Header from "../Header";
import Menu from "../Menu";
import LoadingPage from '../LoadingPage';
import AddHabitForm from "../AddHabitForm";
import Habit from "../Habit";

import { 
  Container,
  AddButton
} from "./style";

const HabitPage = () => {

  const { token } = useContext(UserToken);

  const [userHabitsList, setUserHabitsList] = useState([]); 
  const [showHabitForm, setShowHabitForm] = useState(false)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getHabitList();
  }, [])

  useEffect(() => {
    getHabitList();
  }, [showHabitForm]);

  function getHabitList () {
    const promise = getHabits(token);
    promise.catch((error) => {
      alert(`Ocorreu um erro: ${error. message}`);
      console.log(error);
      setLoading(false);
    })
    promise.then((res) => {
      console.log(res.data);
      setUserHabitsList(res.data);
      setLoading(false);
    });
  }

  return (
    <>
      {loading ? <LoadingPage /> : ''}
      <Header />
      <Container>
        <span>
          <h1>Meus hábitos</h1>
          <AddButton  onClick={() => {setShowHabitForm(true)}}>+</AddButton>
        </span>

        {showHabitForm ? <AddHabitForm setShowHabitForm={setShowHabitForm} setLoading={setLoading} /> : <></>}

        {userHabitsList.length === 0 ? (
          <div>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
          </div>
        ):
        (
          userHabitsList.map((habit, index) => <Habit habit={habit} key={index} token={token} />)
        )
        }

      </Container>
      <Menu />
    </>
  )
}
//<Habit />
//<Habit />
//<AddHabit />

export default HabitPage;