import { useState, useEffect } from 'react';

import TrashIcon from '../../assets/images/trash.svg';
import WeekComponent from '../WeekComponent';
import { deleteHabit } from '../../services/trackit';

import {
  HabitArea,
} from './style';

const Habit = ({ habit, token, setLoading, getHabitList }) => {

  const [daysList, setDaysList] = useState([
    {name: 'D', selected: false},
    {name: 'S', selected: false},
    {name: 'T', selected: false},
    {name: 'Q', selected: false},
    {name: 'Q', selected: false},
    {name: 'S', selected: false},
    {name: 'S', selected: false},
  ]);

  useEffect(() => {
    if(habit.name) {
      let list = []
      list = daysList.map((day, index) => {
        let object = {...day}
        habit.days.forEach(item => {
          if(item === index) {
            object = {...day, selected:true}
          }
        });
        return object;
      })
      setDaysList(list);
    }
  }, [])

  function handleDeleteClick () {
    const confirm = window.confirm('Deseja deletar este hábito?');

    if(confirm){
      const promise = deleteHabit(habit.id, token);
      promise.catch((error) => {
        console.log(error);
        alert(`Ocorrey um erro: ${error.message}`)
        getHabitList();
      })
      promise.then(res => {
        console.log(res.data);
        getHabitList();
      })
    }
  }

  return (
    <HabitArea>
      <h1>{habit.name}</h1>
      <img src={TrashIcon} alt='' onClick={handleDeleteClick} />
      <span>
        <WeekComponent daysList={daysList} setDaysList={setDaysList} settable={false}/>
      </span>
    </HabitArea>
  )
}

export default Habit;