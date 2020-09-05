import {Map} from 'immutable'

let defaultState = Map({
    list:[]
}) 
const reducer = (state=defaultState,action)=>{
    switch(action.type){
        case 'LOAD_DATA':
            return state.setIn(['list'],action.list)
        default:
            return state
    }
}

export default reducer