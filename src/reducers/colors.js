function colors(state = { colors: {}, loading: false, loaded: false }, action) {
    switch (action.type) {
        case 'FETCHING_COLORS':
            // console.log('Fetching Colors...')
            return Object.assign({}, { ...state }, { loading: true })

        case 'COLOR_FETCHED':
            const newColor = {}
            newColor[action.payload.name.toUpperCase()] = action.payload
            const colors = Object.assign({}, { ...state.colors }, newColor)
            return Object.assign({}, { ...state }, { colors })

        case 'ALL_COLORS_FETCHED':
            // console.log('All colors added!')
            return Object.assign(
                {},
                { ...state },
                {
                    loading: false,
                    loaded: true,
                }
            )

        default:
            return state
    }
}

export default colors
