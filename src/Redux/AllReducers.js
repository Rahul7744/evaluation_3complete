import {combineReducers} from 'redux'
import addingData from './Reducer'

const allReducers = combineReducers({
    data:addingData
})

export default allReducers
