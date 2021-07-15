import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
// import { colorFromDigit, choicesFromColumnName } from '../utilities/utility'
import {
    updateColorCode,
    setValueFromColorCode,
    setDigit,
    updateValue,
} from '../actions/resistorActions'

const ColorPickerColumn = (props) => {
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
        <>
            <div id={`${columnName}-col`} className={'color-picker-column'}>
                <span className={'column-title'}>{columnDisplayName}</span>

                <ToggleButtonGroup
                    vertical
                    type="radio"
                    size="sm"
                    name={`${columnName}-picker`}
                    onChange={handleChange}
                    value={currentColor}
                >
                    {colorKeys.map((color, idx) => (
                        <ToggleButton
                            className={props.COLORS[color].name}
                            value={props.COLORS[color].name}
                            key={idx}
                        >
                            {props.COLORS[color].name}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </div>
        </>
    )
}

export default ColorPickerColumn
