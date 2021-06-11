import './App.css';
import Container from 'react-bootstrap/Container'
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

function App() {
  return (
    <Container>
      <h1>Resistor Calculator!</h1>
    <LoginButton />
    <LogoutButton />
    <Profile />
    </Container>
  );
}

export default App;
