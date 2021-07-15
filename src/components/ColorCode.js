import React from 'react'
import { useSelector } from 'react-redux'
import ColorBand from './ColorBand'

const ColorCode = (props) => {
    //   const   colorCode = ["yellow", "blue", "green", "gold"]

    const colorCode = useSelector((state) => state.resistor.colorCode)
    // const colorCode = props.colorCode

    const checkPos = (index) => {
        switch (index) {
            case 0:
                return 'first'

            case colorCode.length - 1:
                return 'last'

            default:
                return 'mid'
        }
    }

    return (
        <>
            {colorCode.map((color, index) => (
                <ColorBand color={color} pos={checkPos(index)} key={index} />
            ))}
        </>
    )
}

export default ColorCode
