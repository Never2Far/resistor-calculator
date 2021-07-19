export function fetchColors() {
    return (dispatch) => {
        console.log('dispatching')
        dispatch({ type: 'FETCHING_COLORS' })
        // https://glacial-savannah-70189.herokuapp.com/colors
        fetch('http://localhost:3001/colors')
            .then((response) => response.json())
            .then((colors) => {
                // console.log(colors)
                for (const color of colors.data) {
                    const newColor = {
                        name: color.attributes.name,
                        digit: color.attributes.digit,
                        multiplier: color.attributes.multiplier,
                        tolerance: color.attributes.tolerance,
                        tempCoefficient: color.attributes.temp_coefficient,
                    }
                    // console.log(newColor)
                    dispatch({ type: 'COLOR_FETCHED', payload: newColor })
                }
                dispatch({ type: 'ALL_COLORS_FETCHED' })
            })
    }
}
