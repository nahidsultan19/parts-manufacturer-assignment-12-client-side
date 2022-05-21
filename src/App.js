import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import Purchase from './Components/Home/Purchase';
import Login from './Components/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<p>About</p>} />
        <Route path='/services' element={<p>Services</p>} />
        <Route path='/purchase/:name' element={<Purchase />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
