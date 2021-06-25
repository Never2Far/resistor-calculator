function colors(state = {colors: [],
loading: false,
loaded: false}, action) {


switch (action.type) {
    case 'FETCHING_COLORS':
        console.log('Fetching Colors...')
        return Object.assign({}, {...state}, {colors: [...state.colors]}, {loading: true})

        case 'ADD_COLOR':
            
            
            
            return Object.assign({}, {...state}, {colors: [...state.colors, action.payload]} )

            case 'ALL_COLORS_ADDED':
                console.log("All colors added!")
                return Object.assign({}, {...state}, {loading: false,loaded: true})

    default:
        return state
}

}

export default colors