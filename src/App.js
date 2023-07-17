import {Route, Routes} from 'react-router-dom'
import './App.css';
import Login from './components/login';
import Signup from './components/register';
import Home from './components/home';
import About from './components/about';
import Educators from './components/educators';
import Layout from './components/layout';
import Quiz from './components/Quiz';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/main' element={<Layout />}>
          <Route path='home' element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="educators" element={<Educators />}/>
          <Route path='quiz' element={<Quiz />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
