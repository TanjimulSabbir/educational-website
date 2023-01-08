import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';
import About from './Pages/About/About';
import Prices from './Pages/Prices/Prices';
import Journal from './Pages/Journal/Journal';
import OurPages from './Pages/OurPages/OurPages';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Shared/Header/Footer/Footer';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/courses' element={<Courses />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/Prices' element={<Prices />}></Route>
        <Route path='/journal' element={<Journal />}></Route>
        <Route path='/pages' element={<OurPages />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
