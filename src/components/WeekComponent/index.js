import styled from "styled-components";

export const DayButton = styled.button`
  width: 30px;
  height: 30px;
  margin: 2px;

  background-color: ${props => props.selected ? '#CFCFCF' : '#fff'};
  border: 1px solid #DBDBDB;
  border-radius: 5px;

  font-size: 20px;
  color: ${props => props.selected ? '#fff' : '#DBDBDB'};
`;

const WeekComponent = ({ daysList, setDaysList, settable=false }) => {
  
  function handleSelectDay (dayIndex) {

    let list = [...daysList];
    list = list.map((item, index) => {
      if(index === dayIndex){
        return ({...item, selected:!item.selected});
      }else{
        return ({...item});
      }
    })

    setDaysList(list);
  }

  return (
    <span>
      {daysList.map((day, index) => 
        <DayButton 
          key={index} 
          onClick={settable ? (() => {handleSelectDay(index)}) : () => {}} 
          selected={day.selected} 
        >
          {day.name}
        </DayButton>
      )}
    </span>
  )
}

export default WeekComponent;