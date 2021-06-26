import React from 'react'
import { useSelector } from 'react-redux'

const ColorPicker = () => {
    const bandCount = useSelector((state) => state.resistor.bandCount)

    return <span>Color Picker Placeholder: {bandCount}</span>
}

export default ColorPicker
