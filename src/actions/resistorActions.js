// export function setValueFromColorCode(colorCode) {
//     const bandCount = colorCode.length
//     for (const color in colorCode) {
//     }
//     let x
//     switch (bandCount) {
//         case 3:
//         case 4:
//             x = parseInt(`${digit1}` + `${digit2}`) * multiplier
//             break
//         case 5:
//         case 6:
//             x = parseInt(`${digit1}` + `${digit2}` + `${digit3}`) * multiplier
//             break
//         default:
//             break
//     }
// }

export function setColorCodeFromValue(value) {
    return ['yellow', 'blue', 'green', 'gold']
}

export function setColorCode(colorCode) {
    return (dispatch) => {
        dispatch({ type: 'SET_BAND_COUNT', payload: colorCode.length })
        dispatch({ type: 'SET_COLOR_CODE', payload: colorCode })
    }
}

export function setValue(value) {
    return (dispatch, getState) => {
        const bandCount = getState().resistor.bandCount
        console.log(value)
        let digits = `${value}`.split('')
        const newValue = { value }
        console.log(newValue)
        newValue.digit1 = parseInt(digits.shift())
        newValue.digit2 = parseInt(digits.shift())

        switch (bandCount) {
            case 3:
            case 4:
                newValue.multiplier = parseInt(`1` + `${digits.join('')}`)
                break
            case 5:
            case 6:
                newValue.digit3 = parseInt(digits.shift())
                newValue.multiplier = parseInt(`1` + `${digits.join('')}`)
                break
            default:
                break
        }
        console.log(newValue)
        dispatch({ type: 'SET_VALUE', payload: newValue })
    }
}

export function setBandCount(count) {
    let colorCode
    switch (count) {
        case 3:
            colorCode = ['yellow', 'violet', 'gold']
            break
        case 4:
            colorCode = ['yellow', 'violet', 'black', 'gold']
            break
        case 5:
            colorCode = ['yellow', 'violet', 'green', 'red', 'gold']
            break
        case 6:
            colorCode = ['yellow', 'violet', 'black', 'green', 'gold', 'red']
            break

        default:
            colorCode = ['yellow', 'violet', 'green', 'gold']
            break
    }

    return (dispatch) => {
        dispatch({ type: 'SET_BAND_COUNT', payload: count })
        dispatch({ type: 'SET_COLOR_CODE', payload: colorCode })
    }
}
