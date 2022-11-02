import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './containers/LoginContainer/LoginContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' exact element={<Login />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
