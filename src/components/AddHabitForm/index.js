import { useState } from 'react';
import dayjs from 'dayjs';
import UserToken from '../../contexts/UserToken';
import { useContext } from 'react';

import { createHabit } from '../../services/trackit';

import WeekComponent from '../WeekComponent';

import {
  AddArea,
  Button
} from './style'

var weekday = require('dayjs/plugin/weekday')
dayjs.extend(weekday)

const AddHabitForm = ({ setShowHabitForm, setLoading }) => {

  const { token } = useContext(UserToken)

  const [habitName, setHabitName] = useState('')
  const [daysList, setDaysList] = useState([
    {name: 'D', selected: false},
    {name: 'S', selected: false},
    {name: 'T', selected: false},
    {name: 'Q', selected: false},
    {name: 'Q', selected: false},
    {name: 'S', selected: false},
    {name: 'S', selected: false},
  ]);

  function handleSubmit () {
    setLoading(true);

    const days = []

    for(let i=0; i<daysList.length; i++){
      let day = daysList[i]
      if(day.selected === true){
        days.push(i);
      }
    }

    if(days.length === 0 || habitName === ''){
      alert('Preencha os campos corretamente!');
    }else{
      const body = {
        name: habitName,
        days
      }

      const promise = createHabit(body, token);
      promise.catch((error) => {
        alert(`Ocorreu um erro: ${error.message}`);
        console.log(error);
        setLoading(false)
      })
      promise.then((res) => {
        setLoading(false)
        setShowHabitForm(false);
      })
    }

  }

  return (
    <AddArea>
      <input 
        placeholder="nome" 
        value={habitName}
        onChange={(e) => {setHabitName(e.target.value)}}
      />
      <WeekComponent daysList={daysList} setDaysList={setDaysList} />
      <div>
        <Button type="link" onClick={() => {setShowHabitForm(false)}} >Cancelar</Button>
        <Button onClick={handleSubmit}>Salvar</Button>
      </div>
    </AddArea>
  )
}

export default AddHabitForm;