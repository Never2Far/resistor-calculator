import React from 'react'
import ToggleButton from 'react-bootstrap/esm/ToggleButton'

const ColorChoice = (props) => {
    const color = props.color

    return (
        <ToggleButton type="radio" value={color.name} className={color.name}>
            {color.name}
        </ToggleButton>
    )
}

export default ColorChoice
