import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Form from 'react-bootstrap/Form'
// import { colorFromDigit, choicesFromColumnName } from '../utilities/utility'
import {
    updateColorCode,
    setValueFromColorCode,
    setDigit,
    updateValue,
} from '../actions/resistorActions'

const ColorPickerColumnRadios = (props) => {
    const columnName = props.columnName[0]
    const columnDisplayName = props.columnName[1]
    // const currentColor = props.columnName[2]
    // const codeIndex = props.columnName[3]
    const codeIndex = props.pos

    // const colorCode = props.colorCode
    const colorCode = useSelector((state) => state.resistor.colorCode)
    // console.log(currentColor)
    const dispatch = useDispatch()
    // console.log(props.COLORS)
    const currentColor = useSelector(
        (state) => state.resistor.colorCode[codeIndex]
    )
    // const colorChoices = choicesFromColumnName(columnName, props.COLORS)

    // const [columnValue, setColumnValue] = useState(currentColor)

    const handleChange = (colorName) => {
        // console.log(colorName)
        // setColumnValue(colorName)
        dispatch(updateColorCode(colorName, codeIndex))
        dispatch(setValueFromColorCode(colorCode))
        dispatch(setDigit(columnName, colorName))
        dispatch(updateValue())

        // dispatch()
    }

    // const COLORS = Object.assign(
    //     {},
    //     (dispatch, getState) => getState().colors.colors
    // )

    const colorKeys = [
        'BLACK',
        'BROWN',
        'RED',
        'ORANGE',
        'YELLOW',
        'GREEN',
        'BLUE',
        'VIOLET',
        'GREY',
        'WHITE',
        'GOLD',
        'SILVER',
    ]

    switch (columnName) {
        case 'digit1':
        case 'digit2':
        case 'digit3':
            colorKeys.pop()
            colorKeys.pop()
            break
        case 'tempCoefficient':
            colorKeys.pop()
            colorKeys.pop()
            colorKeys.pop()
            break
        case 'tolerance':
            colorKeys.splice(9, 1)
            colorKeys.shift()
            break
        default:
            break
    }
    // console.log(colorKeys)
    // const colors = colorKeys.map((colorKey) => {
    //     return props.COLORS[colorKey]
    // })
    // console.log(colors)

    return (
        <div id={`${columnName}-col`} className={'color-picker-column'}>
            <span className={'column-title'}>{columnDisplayName}</span>
            <Form>
                {colorKeys.map((color, idx) => (
                    <Form.Check
                        size="lg"
                        type="radio"
                        label={props.COLORS[color].name}
                        className={props.COLORS[color].name}
                        value={props.COLORS[color].name}
                        key={idx}
                        onChange={(event) => handleChange(event.target.value)}
                        checked={currentColor === props.COLORS[color].name}
                    />
                ))}
            </Form>
        </div>
    )
}

export default ColorPickerColumnRadios
