import { combineReducers } from 'redux';
import resistor from '../reducers/resistor'



const rootReducer = combineReducers(
    {resistor: resistor}
    );


export default rootReducer