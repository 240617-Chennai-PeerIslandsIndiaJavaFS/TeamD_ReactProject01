
import { UserContextComponent } from './components/Context/UserContextComponent';
import LoginPage from './components/loginpage/LoginPage';
import DisplayMessages from './components/messages/DisplayMessages';
import './components/messages/MessageStyles.css'; // Import the CSS file
import './App.css';
import AdminHome from './components/HomePage/AdminHome';


function App() {
  return (
    <UserContextComponent>
      <AdminHome/>
    </UserContextComponent>
  );
}
export default App;
