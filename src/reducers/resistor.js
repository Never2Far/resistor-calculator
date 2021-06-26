function resistor(
    state = {
        colorCode: ['yellow', 'blue', 'green', 'gold'],
        bandCount: 4,
        value: 500,
    },
    action
) {
    switch (action.type) {
        case 'SET_BAND_COUNT':
            console.log(`band count: ${action.payload}`)
            return Object.assign(
                {},
                { ...state },
                { bandCount: action.payload }
            )

        case 'SET_COLOR_CODE':
            console.log(`color code: ${action.payload}`)
            return Object.assign(
                {},
                { ...state },
                { colorCode: action.payload }
            )
        default:
            return state
    }
}

export default resistor
