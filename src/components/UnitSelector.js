import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Form from 'react-bootstrap/Form'
import { changeUnit } from '../actions/resistorActions'

const UnitSelector = (props) => {
    const dispatch = useDispatch()
    const [unit, setUnit] = useState(props.unit)

    function handleChange(unitOption) {
        setUnit(unitOption)
        dispatch(changeUnit(unitOption))
    }

    return (
        <Form inline>
            <Form.Group controlID="UnitSelector">
                <Form.Control
                    as="select"
                    onChange={(event) => handleChange(event.target.value)}
                    value={unit}
                >
                    <option value="1">{'\u03A9 (Ohms)'}</option>
                    <option value="k">{'k\u03A9 (kilo-Ohms)'}</option>
                    <option value="M">{'M\u03A9 (mega-Ohms)'}</option>
                </Form.Control>
            </Form.Group>
        </Form>
    )
}

export default UnitSelector
