import React from 'react'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { setBandCount, updateValue } from '../actions/resistorActions'
import { useSelector, useDispatch } from 'react-redux'

const BandCountPicker = (props) => {
    const dispatch = useDispatch()
    // const count = useSelector((state) => state.resistor.bandCount)
    const count = props.bandCount

    function handleChange(value) {
        dispatch(setBandCount(value))
        // dispatch(setValue(47000))
        // dispatch(updateValue())
    }

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
                onChange={(value) => handleChange(value)}
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
