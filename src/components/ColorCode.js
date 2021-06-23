import React from 'react'
import ColorBand from './ColorBand'

const ColorCode = () => {
  const   colorCode = ["yellow", "blue", "green", "gold"]

    return (
<div>
        {colorCode.map(color => 
            <ColorBand color={color} />
            )}
        

        
        </div>
    )

}

export default ColorCode

