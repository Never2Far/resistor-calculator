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
        case 'DRAWING_RESISTOR':
            console.log('Drawing Resistor...')
            return state

        case 'DRAW_RESISTOR':
            console.log('Resistor displayed')
            count += 1
            return Object.assign({}, { count })

        default:
            return state
    }
}

export default resistor
