import { useState, useEffect } from 'react';

import TrashIcon from '../../assets/images/trash.svg';
import WeekComponent from '../WeekComponent';
import { deleteHabit } from '../../services/trackit';

import {
  HabitArea,
} from './style';

const Habit = ({ habit, token }) => {

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
    console.log('');
  }

  return (
    <HabitArea>
      <h1>{habit.name}</h1>
      <img src={TrashIcon} alt='' />
      <span>
        <WeekComponent daysList={daysList} setDaysList={setDaysList} settable={false}/>
      </span>
    </HabitArea>
  )
}

export default Habit;