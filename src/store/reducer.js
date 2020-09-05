import {combineReducers} from 'redux-immutable'
import {reducer as home} from '../pages/home/'
import {reducer as pin} from '../pages/pin/'
import {reducer as detail} from '../pages/detail/'

export default combineReducers({
    home,
    pin,
    detail
})