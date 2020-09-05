import { connect } from 'react-redux'
import {loaddetailData,loadresultData,loadreviewData} from '../actionCreator'
import {getIn} from 'immutable'
let mapStateTOprops=(state)=>{
    return {
        detaillist:state.getIn(['detail','detaillist']),
        resultlist:state.getIn(['detail','resultlist']),
        info:state.getIn(['detail','info']),
        reviewlist:state.getIn(['detail','reviewlist'])
    }
}

let mapDispatchToProps = (dispatch)=>{
    
    return {
        loaddetailData(id){
            dispatch(loaddetailData(id))
            dispatch(loadresultData(id))
            dispatch(loadreviewData(id))
        }
    }
}

export default connect(mapStateTOprops,mapDispatchToProps)