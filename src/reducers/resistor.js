function resistor(
    state = {
        colorCode: ['yellow', 'blue', 'green', 'gold'],
        bandCount: 4,
        value: 500,
    },
    action
) {
    let count = 0

    switch (action.type) {
        case 'SET_BAND_COUNT':
            console.log(`band count: ${action.payload}`)
            return Object.assign(
                {},
                { ...state },
                { bandCount: action.payload }
            )

        default:
            return state
    }
}

export default resistor
