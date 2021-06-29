import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { colorFromDigit, choicesFromColumnName } from '../utilities/utility'

const ColorPickerColumn = (props) => {
    const columnName = props.columnName[0]
    const columnDisplayName = props.columnName[1]
    console.log(props.COLORS)
    console.log(props.choices)
    // const colorChoices = choicesFromColumnName(columnName, props.COLORS)

    const [columnValue, setColumnValue] = useState('yellow')

    const handleChange = (value) => {
        console.log(value)
        setColumnValue(value)
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
        case 'temp-coef':
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
    console.log(colorKeys)
    const colors = colorKeys.map((colorKey) => {
        return props.COLORS[colorKey]
    })
    console.log(colors)

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
                    value={columnValue}
                >
                    {props.choices.map((color) => (
                        <ToggleButton
                            className={props.COLORS[color].name}
                            value={props.COLORS[color].name}
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
