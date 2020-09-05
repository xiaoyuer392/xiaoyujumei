const loaddetailData = (detaillist)=>{
    return {
        type:"SAGA_LOAD_DETAIL_DATA",
        detaillist
    }
}

const loadresultData = (resultlist)=>{
    return {
        type:"SAGA_LOAD_DETAIL_RESULT_DATA",
        resultlist
    }
}

const loadreviewData = (reviewlist)=>{
    return {
        type:"SAGA_LOAD_DETAIL_REVIEW_DATA",
        reviewlist
    }
}

export {
    loaddetailData,
    loadresultData,
    loadreviewData
}
