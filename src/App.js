import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'
import Resistor from './components/Resistor'
import BandCountPicker from './components/BandCountPicker'
import ColorPicker from './components/ColorPicker'

function App() {
    return (
        <Container>
            <LoginButton />
            <LogoutButton />
            <Resistor />
            <BandCountPicker />
            <ColorPicker />
            <Profile />
        </Container>
    )
}

export default App
