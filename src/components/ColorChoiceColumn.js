import React from 'react'

const ColorChoiceColumn = (props) => {
    const name = props.name[0]
    const displayName = props.name[1]

    return (
        <>
            <div id={`${name}-col`} className={'color-picker-column'}></div>
            <span className={'column-title'}>{displayName}</span>
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
