import { checkHabit, unCheckHabit } from '../../services/trackit';

import CheckIcon from '../../assets/images/check.svg'
import {
  HabitArea,
  CheckBox,
  Text
} from './style'

const TodayHabit = ({ habit, token, setLoading, getTodayHabitList }) => {

  const textColor = (habit.done ? '#8FC549' : '#666666');
  const isRecord = ((habit.highestSequence !== 0 && habit.highestSequence === habit.currentSequence && habit.done) ? true : false)

  function handleCheckHabit (){
    setLoading(true);
    if(habit.done === false){
      const promise = checkHabit(habit.id, token);
      promise.catch(error => {
        console.log(error);
        alert(`Ocorreu um erro: ${error.message}`);
        setLoading(false);
      })
      promise.then(res => {
        setLoading(false);
        getTodayHabitList();
      })
    }else{
      const promise = unCheckHabit(habit.id, token);
      promise.catch(error => {
        console.log(error);
        alert(`Ocorreu um erro: ${error.message}`);
        setLoading(false);
      })
      promise.then(res => {
        setLoading(false);
        getTodayHabitList();
      })
    }
  }

  return (
    <HabitArea>
      <div>
        <h1>{habit.name}</h1>
        <p>Sequência atual: <Text color={textColor} >{habit.currentSequence} dias</Text></p>
        <p>Seu recorde: <Text color={isRecord ? '#8FC549' : '#666666'}>{habit.highestSequence} dias</Text></p>
      </div>
      <CheckBox checked={habit.done} onClick={handleCheckHabit}>
        <img src={CheckIcon} alt="" />
      </CheckBox>
    </HabitArea>
  )
}

export default TodayHabit;