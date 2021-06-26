export function getValue(colorCode) {
    return 'value placeholder'
}

export function getColorCodeFromValue(value) {
    return ['yellow', 'blue', 'green', 'gold']
}

export function setBandCount(count) {
    return (dispatch) => {
        dispatch({ type: 'SET_BAND_COUNT', payload: count })
    }
}

export default resistorActions
