
import { UserContextComponent } from './components/Context/UserContextComponent';
import LoginPage from './components/loginpage/LoginPage';
import './components/messages/MessageStyles.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForgotPage from './components/forgotpasswordpage/ForgotPage';
import AdminHome from './components/HomePage/AdminHome';


function App() {
  return (
    <UserContextComponent>
    <Router>
      <Routes>
          <Route path="/" exact element={<LoginPage />} />
          <Route path="/reset" exact element={<ForgotPage></ForgotPage>} />
          <Route path='/home' exact element={<AdminHome></AdminHome>}/>
      </Routes>
    </Router>
    </UserContextComponent>
  );
}
export default App;
