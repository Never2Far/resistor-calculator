import React from 'react'
import { useSelector } from 'react-redux'
import ColorChoiceColumn from './ColorChoiceColumn'
import './Resistor.css'

const ColorPicker = () => {
    const bandCount = useSelector((state) => state.resistor.bandCount)

    // let columnNames = [['digit1', 'Band 1'], ['digit2', 'Band 2'], ['digit3', 'Band 3'], ['multiplier', 'Multiplier'], ['tolerance', 'Tolerance'], ['temp-coef', 'Temperature Coefficient']]
    let columnNames
    switch (bandCount) {
        case 3:
            columnNames = [
                ['digit1', 'Band 1'],
                ['digit2', 'Band 2'],
                ['multiplier', 'Multiplier'],
            ]
            break
        case 4:
            columnNames = [
                ['digit1', 'Band 1'],
                ['digit2', 'Band 2'],
                ['multiplier', 'Multiplier'],
                ['tolerance', 'Tolerance'],
            ]
            break
        case 5:
            columnNames = [
                ['digit1', 'Band 1'],
                ['digit2', 'Band 2'],
                ['digit3', 'Band 3'],
                ['multiplier', 'Multiplier'],
                ['tolerance', 'Tolerance'],
            ]
            break
        case 6:
            columnNames = [
                ['digit1', 'Band 1'],
                ['digit2', 'Band 2'],
                ['digit3', 'Band 3'],
                ['multiplier', 'Multiplier'],
                ['tolerance', 'Tolerance'],
                ['temp-coef', 'Temperature Coefficient'],
            ]
            break
    }

    return (
        <div id="color-picker-container">
            {columnNames.map((name) => (
                <ColorChoiceColumn name={name} />
            ))}
        </div>
    )
}

export default ColorPicker
//* <ColorChoiceColumn name=/> */
//     <div id="digit1-col" class="color-picker-column"><span class='column-title'>Band 1</span></div>
//     <div id="digit2-col" class="color-picker-column"><span class='column-title'>Band 2</span></div>
//     <div id="digit3-col" class="color-picker-column"><span class='column-title'>Band 3</span></div>
//     <div id="multiplier-col" class="color-picker-column"><span class='column-title'>Multiplier</span></div>
//     <div id="tolerance-col" class="color-picker-column"><span class='column-title'>Tolerance</span></div>
//     <div id="temp-coef-col" class="color-picker-column"><span class='column-title'>Temperature<br>Coefficient</span></div>
