import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Shared/Header/Footer/Footer';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/courses' element={<Courses></Courses>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <Footer></Footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
