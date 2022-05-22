import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import Purchase from './Components/Home/Purchase';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import PrivateRoute from './Components/Login/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';
import Orders from './Components/Dashboard/Orders';
import AddReview from './Components/Dashboard/AddReview';
import Profile from './Components/Dashboard/Profile';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './Components/Dashboard/Users';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<p>About</p>} />
        <Route path='/services' element={<p>Services</p>} />
        <Route path='/purchase/:name' element={<PrivateRoute><Purchase /></PrivateRoute>} />
        <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>
          <Route index element={<Orders />} />
          <Route path='add-review' element={<AddReview />} />
          <Route path='profile' element={<Profile />} />
          <Route path='users' element={<Users />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
