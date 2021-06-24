import React from 'react'
import {useSelector} from 'react-redux'
import ColorBand from './ColorBand'

const ColorCode = () => {
//   const   colorCode = ["yellow", "blue", "green", "gold"]

const colorCode = useSelector(state => state.resistor.colorCode)



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




            <ColorBand color={color} pos={checkPos(color)} key={colorCode.indexOf(color)}/>

            

            )}
        
        </>
        
        
    )

}

export default ColorCode

