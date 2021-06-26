import './App.css'
import Container from 'react-bootstrap/Container'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'
import Resistor from './components/Resistor'
import BandCountPicker from './components/BandCountPicker'

function App() {
    return (
        <Container>
            <LoginButton />
            <LogoutButton />
            <Resistor />
            <BandCountPicker />
            <Profile />
        </Container>
    )
}

export default App
