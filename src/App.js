import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Resistor from './components/Resistor'
import BandCountPicker from './components/BandCountPicker'
import ColorPicker from './components/ColorPicker'
// import ValueDisplay from './components/ValueDisplay'
import { useSelector } from 'react-redux'

function App() {
    const colorsLoaded = useSelector((state) => state.colors.loaded)
    const resistor = useSelector((state) => state.resistor)

    if (colorsLoaded)
        return (
            <Container id="page-container">
                <LoginButton />
                <LogoutButton />
                <Resistor resistor={resistor} />
                <div id={'band-count-picker-text'} className={'centered'}>
                    {'Choose the number of bands on the resistor: '}
                </div>
                <div id={'band-count-picker-container'}>
                    <BandCountPicker bandCount={resistor.bandCount} />
                </div>
                <ColorPicker
                    bandCount={resistor.bandCount}
                    colorCode={resistor.colorCode}
                />
            </Container>
        )
    else return null
}

export default App
