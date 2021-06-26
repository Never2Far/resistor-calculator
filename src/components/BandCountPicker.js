import React from 'react'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { setBandCount } from '../actions/resistorActions'
import { useSelector, useDispatch } from 'react-redux'

const BandCountPicker = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.resistor.bandCount)

    const countChoices = [3, 4, 5, 6]

    return (
        <>
            <br></br>
            {'Choose The number of bands on the resistor: '}
            <ToggleButtonGroup
                type="radio"
                name="band-count"
                defaultValue={count}
                variant="primary"
                onChange={(value) => dispatch(setBandCount(value))}
            >
                {countChoices.map((countChoice, idx) => (
                    <ToggleButton
                        key={idx}
                        value={countChoice}
                        checked={count === countChoice}
                        variant="primary"
                    >
                        {countChoice}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </>
    )
}

export default BandCountPicker
