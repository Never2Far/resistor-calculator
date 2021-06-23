function resistor(state = {}, action)  {

let count = 0


switch (action.type) {
    case 'ADDING_RESISTOR':
        console.log("Adding Resistor...")
        return state
        
        case 'ADD_RESISTOR':
            console.log("Resistor Added")
            count += 1
            return Object.assign({}, {count})


    default:
        return state
        
}

}

export default resistor