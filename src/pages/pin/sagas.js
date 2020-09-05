import {call,put,takeEvery} from 'redux-saga/effects'
import {get} from 'utils/http'

function* loadpinData(action){
    try {
        let tab = action.pinlist.tab
        let pinlist = yield call(get,{url:`/tuan/yiqituan/tab_list?tab=${tab}&page=1&per_page=20`})
        const resultArr = pinlist.data.filter((obj)=>{
            return obj.type === "jumei_pop"||obj.type === "jumei_deal"||obj.type === "global_pop";
        })
        yield put({
            type:"LOAD_PIN_DATA",
            pinlist:resultArr
        })
    }catch (e) {
        yield put({type: "LOAD_DATA_FAILED", message: e.message});
     }
}

function* sagas(){
    yield takeEvery('SAGA_LOAD_PIN_DATA',loadpinData)
 }
export default {
    sagas
}