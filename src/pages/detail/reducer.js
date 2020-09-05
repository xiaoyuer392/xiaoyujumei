import {Map} from 'immutable'
let defaultState =Map({
    detaillist:{},
    resultlist:{},
    info:{},
    reviewlist:{}
}) 

const reducer = (state=defaultState,action)=>{
    switch(action.type){
        case 'LOAD_DETAIL_DATA':
            return state.withMutations(value => {
                        value.setIn(['detaillist'],action.detaillist)
            })
        case 'LOAD_DETAIL_RESULT_DATA':
            return state.withMutations(value =>{
                value.setIn(['resultlist'],action.resultlist)
                value.setIn(['info'],action.resultlist.shop_info)
            })
        case 'LOAD_DETAIL_REVIEW_DATA':
            return state.withMutations(value =>{
                value.setIn(['reviewlist'],action.reviewlist)
            })
        default:
            return state
    }
}

export default reducer