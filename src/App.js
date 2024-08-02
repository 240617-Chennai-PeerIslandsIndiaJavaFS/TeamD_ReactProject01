
import { UserContextComponent } from './components/Context/UserContextComponent';
import LoginPage from './components/loginpage/LoginPage';
import Home from './components/HomePage/Home';
import './App.css';

function App() {
  return (
    <UserContextComponent>
      <Home/>
    </UserContextComponent>
  );
}
export default App;
