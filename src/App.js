import './App.css';
import Container from 'react-bootstrap/Container'
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import Resistor from './components/Resistor';

function App() {
  return (
    <Container>
    <LoginButton />
    <LogoutButton />
    <Resistor />
    <Profile />
    </Container>
  );
}

export default App;
