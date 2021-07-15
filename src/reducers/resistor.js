// this.digit1 = digit1;
// this.digit2 = digit2;
// this.digit3 = digit3;
// this.multiplier = multiplier;
// this.tolerance = tolerance;
// this.tempCoef = tempCoef;

export const resistor = (
    state = {
        colorCode: ['yellow', 'violet', 'black', 'gold'],
        bandCount: 4,
        value: 47,
        digit1: 4,
        digit2: 7,
        digit3: null,
        multiplier: 1,
        tolerance: 5,
        tempCoefficient: null,
    },
    action
) => {
    // export const selectValue = (state) => state.resistor.value
    switch (action.type) {
        case 'SET_BAND_COUNT':
            // const newState = Object.assign({}, { ...state })
            // newState.bandCount = action.payload
            // const newState = {}
            // newState.bandCount = action.payload
            // switch (action.payload) {
            //     case 5:
            //         newState.tempCoefficient = null
            //         break
            //     case 4:
            //         newState.tempCoefficient = null
            //         newState.tolerance = null
            //         break
            //     case 3:
            //         newState.tempCoefficient = null
            //         newState.tolerance = null
            //         newState.digit3 = null
            //         break
            //     default:
            //         break
            // }
            // console.log(`band count: ${action.payload}, new state: ${newState}`)
            return Object.assign(
                {},
                { ...state },
                { bandCount: action.payload }
            )

        case 'SET_COLOR_CODE':
            console.log(`color code: ${action.payload}`)
            const colorCode = action.payload

            return Object.assign({}, { ...state }, { colorCode })

        case 'UPDATE_VALUE':
            const value = action.payload
            return Object.assign({}, { ...state }, { value })

        case 'SET_VALUE':
            console.log(action.payload)
            return Object.assign({}, { ...state }, action.payload)
        default:
            return state

        case 'SET_DIGIT':
            console.log(action.payload)
            const update = {}
            update[action.payload.digitName] = action.payload.value
            console.log(update)
            return Object.assign({}, { ...state }, update)

        // case 'UPDATE_COLOR_CODE':
        //     console.log(action.payload)
        //     return Object.assign({}, {...state}, {})
    }
}
