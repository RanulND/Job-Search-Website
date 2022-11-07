import './App.css';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './containers/LoginContainer/LoginContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterHome from './containers/RegisterHomeContainer/RegisterHomeContainer';
import Register from './containers/RegisterContainer/RegisterContainer';
import Home from './containers/HomeContainer/HomeContainer';

const App = () => {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/register' exact element={<RegisterHome />} />
        <Route path='/register/company' exact element={<Register />} />
        <Route path='/home' exact element={<Home />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
