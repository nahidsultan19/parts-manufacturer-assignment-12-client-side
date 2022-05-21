import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Shared/Header';
import Footer from './Shared/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<p>About</p>} />
        <Route path='/services' element={<p>Services</p>} />
        <Route path='/login' element={<p>Login</p>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
