import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserToken from "../../contexts/UserToken";
import { getHabits } from "../../services/trackit";

import Header from "../Header";
import Menu from "../Menu";
import AddHabitForm from "../AddHabitForm";
import Habit from "../Habit";
import LoadingPage from "../LoadingPage";

import { 
  Container,
  AddButton
} from "./style";

const HabitPage = () => {
  const navigate = useNavigate()

  const { token } = useContext(UserToken);

  const [userHabitsList, setUserHabitsList] = useState([]); 
  const [showHabitForm, setShowHabitForm] = useState(false)
  const [loading, setLoading] = useState(false);
  const [fullLoading, setFullLoading] = useState(false);

  useEffect(() => {
    setFullLoading(true)
    getHabitList();
  }, [])

  function getHabitList () {
    setFullLoading(true)
    const promise = getHabits(token);
    promise.catch((error) => {
      console.log(error);
      setFullLoading(false);
      if(error.response.status === 422){
        navigate('/');
        alert(`Usuário deslogado!`);
      }else{
        alert(`Ocorreu um erro: ${error.message}`)
      }
    })
    promise.then((res) => {
      setUserHabitsList(res.data);
      setFullLoading(false);
    });
  }

  return (
    <>
      {fullLoading ? <LoadingPage /> : <></>}
      <Header />
      <Container>
        <span>
          <h1>Meus hábitos</h1>
          <AddButton  onClick={() => {setShowHabitForm(true)}}>+</AddButton>
        </span>

        {showHabitForm ? 
          <AddHabitForm 
            setShowHabitForm={setShowHabitForm} 
            setLoading={setLoading} 
            loading={loading}
            getHabitList={getHabitList}
          /> : <></>
        }

        {userHabitsList.length === 0 ? (
          <div>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
          </div>
        ):
        (
          userHabitsList.map((habit, index) => 
            <Habit 
              habit={habit} 
              key={index} 
              token={token} 
              setLoading={setFullLoading} 
              getHabitList={getHabitList} 
            />
          )
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