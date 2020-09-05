import {call,put,takeEvery} from 'redux-saga/effects'
import {get} from 'utils/http'

function* loaddetailData(action){
    try {
        let detaillist = yield call(get,{url:`/ap/product/ajaxStaticDetail?item_id=${action.detaillist.id}&type=jumei_pop`})
        const resultArr = detaillist.data
        yield put({
            type:"LOAD_DETAIL_DATA",
            detaillist:resultArr
        })
    }catch (e) {
        yield put({type: "LOAD_DATA_FAILED", message: e.message});
     }
}

function* loadreviewData(action){
    try {
        let reviewlist = yield call(get,{url:`/riew/api/v1/getThreadAndReportAndComment.html?product_id=${action.reviewlist.proid}&is_pop=1&verify_code=25dbce5e06f0c215b9faa2d14a6d43c1&client_v=5.0&order=image&page=1&page_size=20&tag=all&uid=&callback=_jsonpe4rl4fz6qi`})
        let arr = reviewlist.split("(") 
        let arr1 = arr.splice(0,1) 
        let arr2 = arr[arr.length-1].substring(0,arr[arr.length-1].length-2)
        arr[arr.length-1]=arr2
        reviewlist =JSON.parse(arr.join('(')).data
        yield put({
            type:"LOAD_DETAIL_REVIEW_DATA",
            reviewlist
        })
    }catch (e) {
        yield put({type: "LOAD_DATA_FAILED", message: e.message});
     }
}

function* loadresultData(action){
    try {
        let detaillist = yield call(get,{url:`/ap/product/ajaxDynamicDetail?item_id=${action.resultlist.id}&type=jumei_pop`})
        const resultlist = detaillist.data.result
        yield put({
            type:"LOAD_DETAIL_RESULT_DATA",
            resultlist:resultlist
        })
    }catch (e) {
        yield put({type: "LOAD_DATA_FAILED", message: e.message});
     }
}

function* sagas(){
    yield takeEvery('SAGA_LOAD_DETAIL_DATA',loaddetailData)
    yield takeEvery('SAGA_LOAD_DETAIL_RESULT_DATA',loadresultData)
    yield takeEvery('SAGA_LOAD_DETAIL_REVIEW_DATA',loadreviewData)
 }
export default {
    sagas
}