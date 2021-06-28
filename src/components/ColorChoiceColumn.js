import React from 'react'
import { useSelector } from 'react-redux'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ColorChoice from './ColorChoice'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const ColorChoiceColumn = (props) => {
    const name = props.name[0]
    const displayName = props.name[1]

    const colors = useSelector((state) => state.colors.colors)
    // console.log(colors)
    console.log(colors['BLACK'])
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
    // const black = colors['BLACK']
    // console.log(black)

    switch (name) {
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
    // const [
    //     BLACK,
    //     BROWN,
    //     RED,
    //     ORANGE,
    //     YELLOW,
    //     GREEN,
    //     BLUE,
    //     VIOLET,
    //     GREY,
    //     WHITE,
    //     GOLD,
    //     SILVER,
    // ] = COLORS
    // [BLACK, BROWN, RED, ORANGE, YELLOW, GREEN, BLUE, VIOLET, GREY, WHITE, GOLD, SILVER]

    return (
        <>
            <div id={`${name}-col`} className={'color-picker-column'}>
                <span className={'column-title'}>{displayName}</span>
                <ButtonGroup
                    toggle
                    vertical
                    type="radio"
                    name={`${name}-picker`}
                >
                    {colorKeys.map((colorKey) => (
                        <ColorChoice color={colors[colorKey]} />
                    ))}
                </ButtonGroup>
            </div>
        </>
    )
}

export default ColorChoiceColumn

//     <div id="digit1-col" class="color-picker-column"><span class='column-title'>Band 1</span></div>
//     <div id="digit2-col" class="color-picker-column"><span class='column-title'>Band 2</span></div>
//     <div id="digit3-col" class="color-picker-column"><span class='column-title'>Band 3</span></div>
//     <div id="multiplier-col" class="color-picker-column"><span class='column-title'>Multiplier</span></div>
//     <div id="tolerance-col" class="color-picker-column"><span class='column-title'>Tolerance</span></div>
//     <div id="temp-coef-col" class="color-picker-column"><span class='column-title'>Temperature<br>Coefficient</span></div>
/* //* for (let i = 0; i < (colorChoices.length); i++) 
          let color = colorChoices[i];
          const input = document.createElement('input')
          const label = document.createElement('label')
          input.setAttribute('type', 'radio');
          input.setAttribute('id', `${columnID}-${color.name}`)
          input.setAttribute('value', color.name)
          input.setAttribute('name', `${columnID}-picker`)
          label.setAttribute('for', color.name)
          label.innerText = color.name
          label.setAttribute('class', color.name)
               
          if (color.name == 'white') {
               label.style.border = 'dashed';
               label.style.borderColor = 'black';
               label.style.borderWidth = '1px';
           */
