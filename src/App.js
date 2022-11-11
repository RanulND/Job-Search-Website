import './App.css';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './containers/LoginContainer/LoginContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterHome from './containers/RegisterHomeContainer/RegisterHomeContainer';
import Register from './containers/RegisterContainer/RegisterContainer';
import Home from './containers/HomeContainer/HomeContainer';
import { Amplify } from 'aws-amplify'
import { amplifyconfig } from './config';
import SignUpConfirm from './containers/ConfirmSignUpConatainer/ConfirmSignUpContainer';
Amplify.configure(amplifyconfig)

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/register' exact element={<RegisterHome />} />
          <Route path='/register/job-seeker' exact element={<Register company = {false} />} />
          <Route path='/register/company' exact element={<Register company = {true} />} />
          <Route path='/company-dashboard' exact element={<Home company={true}/>} />
          <Route path='/seeker-dashboard' exact element={<Home company={false}/>} />
          <Route path='/register/verify' exact element={<SignUpConfirm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
