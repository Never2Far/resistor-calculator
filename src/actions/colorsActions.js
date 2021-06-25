export function fetchColors() {
    return (dispatch) => {
        console.log('dispacthging')
        dispatch({ type: 'FETCHING_COLORS' })
        fetch(process.env.REACT_APP_COLORS_URL)
            .then((response) => response.json())
            .then((colors) => {
                console.log(colors)
                for (const color of colors.data) {
                    const newColor = {
                        name: color.attributes.name,
                        digit: color.attributes.digit,
                        multiplier: color.attributes.multiplier,
                        tolerance: color.attributes.tolerance,
                        tempCoefficient: color.attributes.temp_coefficient,
                    }
                    console.log(newColor)
                    dispatch({ type: 'ADD_COLOR', payload: newColor })
                }
                dispatch({ type: 'ALL_COLORS_ADDED' })
            })
    }
}
