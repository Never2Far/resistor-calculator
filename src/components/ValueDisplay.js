import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'

const ValueDisplay = (props) => {
    // const resistor = useSelector((state) => state.resistor)

    // const [, updateState] = useState()
    // const forceUpdate = useCallback(() => updateState({}), [])
    const resistor = props.resistor

    function displayValue() {
        if (resistor.tempCoefficient != null) {
            return `${resistor.value} \u03A9 (Ohms)  +/- ${resistor.tolerance}%  ${resistor.tempCoefficient}ppm/K`
        } else if (resistor.tolerance == null) {
            return `${resistor.value} \u03A9 (Ohms) `
        } else {
            return `${resistor.value} \u03A9 (Ohms)  +/- ${resistor.tolerance}%`
        }
    }

    return <span id="component-value">{displayValue()}</span>
}

export default ValueDisplay
