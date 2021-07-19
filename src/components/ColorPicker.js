import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import ColorChoiceColumn from './ColorChoiceColumn'
import './Resistor.css'
import ColorPickerColumnRadios from './ColorPickerColumnRadios'
// import { updateColorCode } from '../actions/resistorActions'

const ColorPicker = (props) => {
    const bandCount = useSelector((state) => state.resistor.bandCount)
    const colorCode = useSelector((state) => state.resistor.colorCode)
    // const bandCount = props.bandCount
    // const colorCode = props.colorCode
    const COLORS = useSelector((state) => state.colors.colors)

    // const [colorCode, setColorCode] = useState(currentColorCode)
    // let columnNames = [['digit1', 'Band 1'], ['digit2', 'Band 2'], ['digit3', 'Band 3'], ['multiplier', 'Multiplier'], ['tolerance', 'Tolerance'], ['temp-coef', 'Temperature Coefficient']]
    let columnNames
    switch (bandCount) {
        case 3:
            columnNames = [
                ['digit1', 'Band 1', colorCode[0], 0],
                ['digit2', 'Band 2', colorCode[1], 1],
                ['multiplier', 'Multiplier', colorCode[2], 2],
            ]
            break
        case 4:
            columnNames = [
                ['digit1', 'Band 1', colorCode[0], 0],
                ['digit2', 'Band 2', colorCode[1], 1],
                ['multiplier', 'Multiplier', colorCode[2], 2],
                ['tolerance', 'Tolerance', colorCode[3], 3],
            ]
            break
        case 5:
            columnNames = [
                ['digit1', 'Band 1', colorCode[0], 0],
                ['digit2', 'Band 2', colorCode[1], 1],
                ['digit3', 'Band 3', colorCode[2], 2],
                ['multiplier', 'Multiplier', colorCode[3], 3],
                ['tolerance', 'Tolerance', colorCode[4], 4],
            ]
            break
        case 6:
            columnNames = [
                ['digit1', 'Band 1', colorCode[0], 0],
                ['digit2', 'Band 2', colorCode[1], 1],
                ['digit3', 'Band 3', colorCode[2], 2],
                ['multiplier', 'Multiplier', colorCode[3], 3],
                ['tolerance', 'Tolerance', colorCode[4], 4],
                ['tempCoefficient', 'Temperature Coefficient', colorCode[5], 5],
            ]
            break
    }
    // console.log(columnNames)

    // function newColorCode(colorName, index) {}

    return (
        <>
            <div id={'color-picker-title'} className={'centered'}>
                {'Choose the colors of the bands:'}
            </div>
            <div id="color-picker-container" className={'container'}>
                {columnNames.map((columnName, idx) => (
                    <ColorPickerColumnRadios
                        columnName={columnName}
                        key={idx}
                        COLORS={COLORS}
                        colorCode={colorCode}
                        pos={columnNames.indexOf(columnName)}
                        // setColorCode={setColorCode}
                    />
                ))}
            </div>
            <footer id="footer">©2021 Seth Near</footer>
        </>
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
