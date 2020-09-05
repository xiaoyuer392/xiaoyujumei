import { connect } from 'react-redux'
import {loadpinData} from '../actionCreator'
let mapStateTOprops=(state)=>{
    return {
        pinlist:state.getIn(['pin','pinlist'])
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        loadpinData(tabs){
            dispatch(loadpinData(tabs))
        }
    }
}

export default connect(mapStateTOprops,mapDispatchToProps)