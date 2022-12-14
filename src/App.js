import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import TodayPage from './components/TodayPage'
import HabitPage from './components/HabitPage'
import HistoryPage from './components/HistoryPage'
import GlobalStyle from './styles/GlobalStyle'
import UserToken from './contexts/UserToken';
import UserContext from './contexts/UserContext';
import UserHabitsPercentage from './contexts/UserHabitsPercentage';
import { useState, useEffect } from 'react';

function App() {

  const [token, setToken] = useState('');
  const [userContext, setUserContext] = useState({});
  const [habitsPercentage, setHabitsPercentage] = useState(0);

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ userContext, setUserContext }}>
        <UserToken.Provider value={{ token, setToken }}>
          <UserHabitsPercentage.Provider value={{ habitsPercentage, setHabitsPercentage }}>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={ <LoginPage /> } />
                <Route path='/cadastro' element={ <SignUpPage /> } />
                <Route path='/habitos' element={ <HabitPage /> } />
                <Route path='/hoje' element={ <TodayPage /> } />
                <Route path='/historico' element={ <HistoryPage /> } />
              </Routes>
            </BrowserRouter>
          </UserHabitsPercentage.Provider>
        </UserToken.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
