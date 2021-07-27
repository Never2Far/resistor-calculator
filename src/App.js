import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
// import Resistor from './components/Resistor'
// import BandCountPicker from './components/BandCountPicker'
// import ColorPicker from './components/ColorPicker'
// import ValueDisplay from './components/ValueDisplay'
// import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import NavTabs from './components/NavTabs'

function App() {
    // const colorsLoaded = useSelector((state) => state.colors.loaded)
    // const resistor = useSelector((state) => state.resistor)

    const { user, isAuthenticated } = useAuth0()

    return (
        <Container>
            <NavTabs />
        </Container>
    )
}

export default App

// {isAuthenticated ? <LogoutButton /> : <LoginButton />}
