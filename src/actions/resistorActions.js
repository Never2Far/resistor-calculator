export function getValue(colorCode) {
    return 'value placeholder'
}

export function getColorCodeFromValue(value) {
    return ['yellow', 'blue', 'green', 'gold']
}

export function setColorCode(colorCode) {
    return (dispatch) => {
        dispatch({ type: 'SET_COLOR_CODE', payload: colorCode })
    }
}

export function setBandCount(count) {
    let colorCode
    switch (count) {
        case 3:
            colorCode = ['yellow', 'blue', 'gold']
            break
        case 4:
            colorCode = ['yellow', 'blue', 'green', 'gold']
            break
        case 5:
            colorCode = ['yellow', 'blue', 'green', 'red', 'gold']
            break
        case 6:
            colorCode = ['yellow', 'blue', 'black', 'green', 'red', 'gold']
            break

        default:
            colorCode = ['yellow', 'blue', 'green', 'gold']
            break
    }

    return (dispatch) => {
        dispatch({ type: 'SET_BAND_COUNT', payload: count })
        dispatch({ type: 'SET_COLOR_CODE', payload: colorCode })
    }
}
