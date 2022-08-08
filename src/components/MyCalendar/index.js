import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner'
import Calendar from 'react-calendar';
import dayjs from 'dayjs';

import { getHistoryHabits } from '../../services/trackit'
import UserToken from '../../contexts/UserToken';
import './style.css';

function MyCalendar() {
  const navigate = useNavigate()

  const { token } = useContext(UserToken);

  const [value, setValue] = useState(new Date());
  const [historyHabits, setHistoryHabits] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const promise = getHistoryHabits(token);
    promise.catch(error => {
      console.log(error);
      if(error.response.status === 422){
        alert(`Usuário deslogado!`);
        setLoading(false);
        navigate('/');
      }else{
        alert(`Ocorreu um erro: ${error.message}`);
      }
      setLoading(false);
    })
    promise.then((res) => {
      setHistoryHabits(res.data)
      setLoading(false);
    })
  }, [])

  function onChange(nextValue) {
    setValue(nextValue);
  }

  function setDaysCalendar (date, view) {
    let dayCalendar = dayjs(date).format('YYYYDDMM')
    let isInList = false;
    let color = 'vermelho';

    historyHabits.map(day => {

      let dayHabit = dayjs(day.day).format('YYYYMMDD');
      let totalHabits = day.habits.length;
      let qntChecked = 0
    
      if(parseInt(dayHabit) === parseInt(dayCalendar)){
        isInList = true;

        day.habits.forEach(habit => {
          if(habit.historyId !== null){
            qntChecked += 1;
          }
        })

        if(totalHabits === qntChecked){
          color = 'verde';
        }
      }
    })
    return view === 'month' && isInList ? color : null
  }

  return (
    loading ? <div className='loading'><ThreeDots color="#00BFFF" height={80} width={80} /></div> :
    <Calendar
      onChange={onChange}
      value={value}
      tileClassName={({date, view}) => {return setDaysCalendar(date, view)}}
    />
  );
}

export default MyCalendar;