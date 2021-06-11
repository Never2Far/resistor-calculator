import React from 'react'
import './Resistor.css'
import Container from 'react-bootstrap/Container'

const Resistor = () => {

return (
    <Container>
    <div id="component-container">
            <div id="left-top">
                <span className="title-text">Resistor</span>
            </div>
            <div id="left-bottom"></div>
            <div id="component"></div>
            <div id="right-top">
                <button id="signout-button">Sign Out</button>
                <span className="title-text">Calculator</span>
            </div>
            <div id="right-bottom"></div>
    </div>
    </Container>
)

}

export default Resistor