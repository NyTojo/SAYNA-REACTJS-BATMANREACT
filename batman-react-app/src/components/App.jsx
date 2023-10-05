import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import '../styles/index.css';
import Home from '../pages/Home';
import Game from '../pages/Game';
import Eshop from '../pages/Eshop';
import Layout from '../pages/Layout';
import MonCompte from '../pages/MonCompte';
import NotFoundPage from '../pages/NotFoundPage';
import Singup from '../pages/Singup';
import Login from '../pages/Login';
import { UserProvider } from '../context/AuthContext';


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='Home' element={<Home/>}/>
            <Route path='Game' element={<Game/>}/>
            <Route path='Eshop' element={<Eshop/>}/>
            <Route path='MonCompte' element={<MonCompte/>}/>
            <Route path='Singup' element={<Singup/>}/>
            <Route path='Login' element={<Login/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
