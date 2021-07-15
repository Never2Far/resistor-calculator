export function setDigit(digitName, color) {
    return (dispatch, getState) => {
        console.log(digitName)
        console.log(color)
        const colors = getState().colors.colors
        console.log(color.toUpperCase())
        console.log(colors[color.toUpperCase()].digit)
        let value
        if (['digit1', 'digit2', 'digit3'].includes(digitName))
            value = colors[color.toUpperCase()].digit
        else value = colors[color.toUpperCase()][digitName]

        dispatch({ type: 'SET_DIGIT', payload: { digitName, value } })
        dispatch(updateValue())
    }
}

export function updateValue() {
    return (dispatch, getState) => {
        const resistor = getState().resistor
        let value

        if (resistor.tempCoefficient != null) {
            value =
                parseInt(
                    `${resistor.digit1}` +
                        `${resistor.digit2}` +
                        `${resistor.digit3}`
                ) * resistor.multiplier
        } else if (resistor.tolerance === null) {
            value =
                parseInt(`${resistor.digit1}${resistor.digit2}`) *
                resistor.multiplier
        } else if (resistor.digit3 === null) {
            value =
                parseInt(`${resistor.digit1}${resistor.digit2}`) *
                resistor.multiplier
        } else {
            value =
                parseInt(
                    `${resistor.digit1}` +
                        `${resistor.digit2}` +
                        `${resistor.digit3}`
                ) * resistor.multiplier
        }

        console.log(value)
        dispatch({ type: 'UPDATE_VALUE', payload: value })
    }
}
// export function updateValue() {
//     return (dispatch, getState) => {
//         const bandCount = getState().resistor.bandCount
//         let digits = `${value}`.split('')
//         const newValue = { value }
//         console.log(newValue)
//         newValue.digit1 = parseInt(digits.shift())
//         newValue.digit2 = parseInt(digits.shift())

//         switch (bandCount) {
//             case 3:
//             case 4:
//                 newValue.multiplier = parseInt(`1` + `${digits.join('')}`)
//                 break
//             case 5:
//             case 6:
//                 newValue.digit3 = parseInt(digits.shift())
//                 newValue.multiplier = parseInt(`1` + `${digits.join('')}`)
//                 break
//             default:
//                 break
//         }
//         console.log(newValue)
//         dispatch({ type: 'SET_VALUE', payload: newValue })
//     }
// }

export function setValueFromColorCode(colorCode) {
    return (dispatch, getState) => {
        const bandCount = colorCode.length
        const colors = getState().colors.colors
        console.log(colors)
        // for (const color in colorCode) {
        const digits = {}
        // let value
        // }
        // let x
        // for (color in colorCode) {
        dispatch({
            type: 'SET_DIGIT',
            payload: { digitName: 'digit3', value: null },
        })
        dispatch({
            type: 'SET_DIGIT',
            payload: { digitName: 'tolerance', value: null },
        })
        dispatch({
            type: 'SET_DIGIT',
            payload: { digitName: 'tempCoefficient', value: null },
        })

        switch (bandCount) {
            case 3:
                dispatch(setDigit('digit1', colorCode[0]))
                dispatch(setDigit('digit2', colorCode[1]))
                dispatch(setDigit('multiplier', colorCode[2]))
                break
            case 4:
                dispatch(setDigit('digit1', colorCode[0]))
                dispatch(setDigit('digit2', colorCode[1]))
                dispatch(setDigit('multiplier', colorCode[2]))
                dispatch(setDigit('tolerance', colorCode[3]))
                // digits.digit1 = colors[colorCode[0].toUpperCase()].digit1
                // digits.digit2 = colors[colorCode[1].toUpperCase()].digit2
                // digits.multiplier =
                //     colors[colorCode[2].toUpperCase()].multiplier
                // digits.value =
                //     parseInt(`${digits.digit1}` + `${digits.digit2}`) *
                //     digits.multiplier
                // console.log(digits.value)

                break
            case 5:
                dispatch(setDigit('digit1', colorCode[0]))
                dispatch(setDigit('digit2', colorCode[1]))
                dispatch(setDigit('digit3', colorCode[2]))
                dispatch(setDigit('multiplier', colorCode[3]))
                dispatch(setDigit('tolerance', colorCode[4]))
                break
            case 6:
                dispatch(setDigit('digit1', colorCode[0]))
                dispatch(setDigit('digit2', colorCode[1]))
                dispatch(setDigit('digit3', colorCode[2]))
                dispatch(setDigit('multiplier', colorCode[3]))
                dispatch(setDigit('tolerance', colorCode[4]))
                dispatch(setDigit('tempCoefficient', colorCode[5]))
                break
            // digits.digit1 = colors[colorCode[0].toUpperCase()].digit1
            // digits.digit2 = colors[colorCode[1].toUpperCase()].digit2
            // digits.digit3 = colors[colorCode[2].toUpperCase()].digit3
            // digits.multiplier =
            //     colors[colorCode[3].toUpperCase()].multiplier
            // digits.value =
            //     parseInt(
            //         `${digits.digit1}` +
            //             `${digits.digit2}` +
            //             `${digits.digit3}`
            //     ) * digits.multiplier
            // console.log(digits)

            default:
                break
        }
        // setColorCode(colorCode)
        // dispatch({type: 'SET_COLOR_CODE', payload: colorCode})
        // dispatch({ type: 'SET_VALUE', payload: digits })
        dispatch(updateValue())
    }
    // }
}

export function updateColorCode(newColorName, codeIndex) {
    return (dispatch, getState) => {
        const newColorCode = [...getState().resistor.colorCode]
        newColorCode[codeIndex] = newColorName

        dispatch({ type: 'SET_COLOR_CODE', payload: newColorCode })
        setValueFromColorCode(newColorCode)
    }
}

// export function setColorCode(colorCode) {
//     return (dispatch) => {
//         dispatch({ type: 'SET_BAND_COUNT', payload: colorCode.length })
//         dispatch({ type: 'SET_COLOR_CODE', payload: colorCode })
//         setValueFromColorCode(colorCode)
//     }
// }

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
                newValue.multiplier = parseInt(`1${digits.join('')}`)
                break
            case 5:
            case 6:
                newValue.digit3 = parseInt(digits.shift())
                newValue.multiplier = parseInt(`1${digits.join('')}`)
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

        dispatch(setValueFromColorCode(colorCode))
        // dispatch(updateValue())
    }
}
