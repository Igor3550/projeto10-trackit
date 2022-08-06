import dayjs from 'dayjs';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from "../Header";
import Menu from "../Menu";
import LoadingPage from '../LoadingPage'
import UserToken from '../../contexts/UserToken';
import UserHabitsPercentage from '../../contexts/UserHabitsPercentage';
import TodayHabit from '../TodayHabit'
import { getTodayHabits } from '../../services/trackit';

import {
  Container,
  Title,
  Text
} from './style'

function getTodayDate () {
  require('dayjs/locale/pt')
  
  const date = dayjs(new Date()).locale('pt').format('dddd, DD/MM')

  return date;
}

const TodayPage = () => {
  const navigate = useNavigate();

  const { token } = useContext(UserToken);
  const { habitsPercentage, setHabitsPercentage } = useContext(UserHabitsPercentage);

  const [todayHabits, setTodayHabits] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTodayHabitList();
  }, [])

  function setPercentage (habits) {
    if(habits.length === 0){
      setHabitsPercentage(0)
    }else{
      const doneHabits = []
  
      habits.forEach(habit => {
        if(habit.done){
          doneHabits.push(habit);
        }
      });
  
      const percentage = parseInt((100 * doneHabits.length) / habits.length);
      setHabitsPercentage(percentage);
    }
  }

  function getTodayHabitList () {
    const promise = getTodayHabits(token);
    promise.catch(error => {
      console.log(error);
      if(error.response.status === 422){
        navigate('/');
        setLoading(false);
        alert(`Usuário deslogado!`);
      }else{
        alert(`Ocorreu um erro: ${error.message}`)
        setLoading(false);
      }
    })
    promise.then(res => {
      setPercentage(res.data);
      setTodayHabits(res.data);
      setLoading(false);
    })
  }

  return (
    <>
      {loading ? <LoadingPage /> : <></>}
      <Header />
      <Container>
        <Title>
          <h1>{getTodayDate()}</h1>
          {habitsPercentage > 0 ?
            <Text color='#8FC549'>{habitsPercentage}% dos hábitos concluídos</Text>
          :
            <p>Nenhum hábito concluído ainda</p>
          }
        </Title>

        {todayHabits.length !== 0 ? todayHabits.map((habit => 
          <TodayHabit 
            key={habit.id}
            habit={habit} 
            token={token} 
            setLoading={setLoading} 
            getTodayHabitList={getTodayHabitList} 
          />
        )) : <></>}

      </Container>
      <Menu />
    </>
  )
}

export default TodayPage;