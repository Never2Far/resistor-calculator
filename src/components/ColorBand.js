import React from 'react'

const ColorBand = (props) => {

const bandColor = props.color
const pos = props.pos



if (pos === 'first'){
    return(
        <div className={`color-band-first ${bandColor}`}></div>
    )
}
else if (pos === 'last'){
   return( <div className={`color-band-last ${bandColor}`}></div>)
}
else
    return( <div className={`color-band ${bandColor}`}></div>)



}

export default ColorBand