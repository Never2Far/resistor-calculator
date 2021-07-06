import React from 'react'
import './Resistor.css'
import Container from 'react-bootstrap/Container'
import ColorCode from './ColorCode'
import ValueDisplay from './ValueDisplay'
import { useSelector } from 'react-redux'

const Resistor = (props) => {
    // const resistor = useSelector((state) => state.resistor)
    const resistor = props.resistor
    return (
        <Container>
            <div id="component-container">
                <div id="left-top">
                    <span className="title-text">Resistor</span>
                </div>
                <div id="left-bottom"></div>
                <div id="component">
                    <ColorCode colorCode={resistor.colorCode} />
                </div>
                <div id="right-top">
                    <button id="signout-button">Sign Out</button>
                    <span className="title-text">Calculator</span>
                </div>
                <div id="right-bottom"></div>
            </div>
            <ValueDisplay resistor={resistor} />
        </Container>
    )
}

export default Resistor
