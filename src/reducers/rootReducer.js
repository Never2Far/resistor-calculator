import { combineReducers } from 'redux'
import resistor from '../reducers/resistor'
import colors from '../reducers/colors'

const rootReducer = combineReducers({ resistor, colors })

export default rootReducer
