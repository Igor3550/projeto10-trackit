import { useState } from 'react';
import UserToken from '../../contexts/UserToken';
import { useContext } from 'react';

import { createHabit } from '../../services/trackit';

import WeekComponent from '../WeekComponent';

import {
  AddArea,
  Button
} from './style'

const AddHabitForm = ({ setShowHabitForm, setLoading, getHabitList }) => {

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
      setLoading(true);
      
      const body = {
        name: habitName,
        days
      }

      const promise = createHabit(body, token);
      promise.catch((error) => {
        alert(`Ocorreu um erro: ${error.message}`);
        console.log(error);
        setLoading(false)
        getHabitList();
      })
      promise.then((res) => {
        setLoading(false)
        setShowHabitForm(false);
        getHabitList();
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
      <WeekComponent daysList={daysList} setDaysList={setDaysList} settable={true} />
      <div>
        <Button type="link" onClick={() => {setShowHabitForm(false)}} >Cancelar</Button>
        <Button onClick={handleSubmit}>Salvar</Button>
      </div>
    </AddArea>
  )
}

export default AddHabitForm;