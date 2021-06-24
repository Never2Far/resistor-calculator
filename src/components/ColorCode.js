import React from 'react'
import ColorBand from './ColorBand'

const ColorCode = () => {
  const   colorCode = ["yellow", "blue", "green", "gold"]

  const checkPos = (color) => {
      switch (colorCode.indexOf(color)) {
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
        {colorCode.map(color => 




            <ColorBand color={color} pos={checkPos(color)}/>

            

            )}
        
        </>
        
        
    )

}

export default ColorCode

