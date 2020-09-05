import { connect } from 'react-redux'
import {loadData} from '../actionCreator'
let mapStateTOprops=(state)=>{
    return {
        list:state.getIn(['home','list'])
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        loadData(){
            dispatch(loadData())
        }
    }
}

export default connect(mapStateTOprops,mapDispatchToProps)