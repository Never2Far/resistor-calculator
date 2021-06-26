import React, { useState } from 'react'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { setBandCount } from '../actions/resistorActions'

const BandCountPicker = () => {
    const [count, setCount] = useState(4)

    const handleChange = (e) => {
        setCount(e.currentTarget.value)
        setBandCount(count)
    }

    return (
        <>
            <ToggleButtonGroup
                type="radio"
                name="band-count"
                value={count}
                onChange={handleChange}
            >
                <ToggleButton value={3}>3</ToggleButton>
                <ToggleButton value={4}>4</ToggleButton>
                <ToggleButton value={5}>5</ToggleButton>
                <ToggleButton value={6}>6</ToggleButton>
            </ToggleButtonGroup>
        </>
    )
}

export default BandCountPicker
