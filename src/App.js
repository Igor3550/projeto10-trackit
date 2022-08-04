import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import TodayPage from './components/TodayPage'
import HabitPage from './components/HabitPage'
import HistoryPage from './components/HistoryPage'
import GlobalStyle from './styles/GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <LoginPage /> } />
          <Route path='/cadastro' element={ <SignUpPage /> } />
          <Route path='/habitos' element={ <HabitPage /> } />
          <Route path='/hoje' element={ <TodayPage /> } />
          <Route path='/historico' element={ <HistoryPage /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
