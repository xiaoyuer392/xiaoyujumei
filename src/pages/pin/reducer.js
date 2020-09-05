import {Map} from 'immutable'
let defaultState =Map({
    pinlist:[]
}) 
const reducer = (state=defaultState,action)=>{
    switch(action.type){
        case 'LOAD_PIN_DATA':
            return state.setIn(['pinlist'],action.pinlist)
            
        default:
            return state
    }
}

export default reducer