import { bindActionCreators } from "redux"


    export function getValue(colorCode) {

        return 'value placeholder'
    
    }

    export function getColorCodeFromValue(value) {
        return ["yellow", "blue", "green", "gold"]
    }

    const resistorActions = bindActionCreators({

        getValue,
        getColorCodeFromValue
          
        })
    export default resistorActions