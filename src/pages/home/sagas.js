import { call, put, takeEvery} from 'redux-saga/effects'
import {get} from 'utils/http'

function* loadData(action) {
   try {
      let list = yield call(get, {url:'/ap/index/ajaxDealactList?card_id=4057&client_v=1&page=2&platform=wap&type=formal&page_key=1596162240'});
      const resultArr = list.item_list.filter((obj)=>{
         return obj.type === "jumei_pop"||obj.type === "jumei_deal"||obj.type === "global_pop";
      })
      yield put({
         type: "LOAD_DATA",
         list: resultArr
         }
      );
   } catch (e) {
      yield put({type: "LOAD_DATA_FAILED", message: e.message});
   }
}

function* sagas(){
   yield takeEvery('SAGA_LOAD_DATA', loadData)
}
export default {
   sagas
}