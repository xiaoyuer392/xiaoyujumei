import { sagas as homeSagas } from '../pages/home/'
import { sagas as pinSagas } from '../pages/pin/'
import { sagas as detail } from '../pages/detail/'

// function* sagas() {
//     yield takeEvery('SAGA_LOAD_DATA', homeSagas.default.loadData);
//     yield takeEvery('SAGA_LOAD_PIN_DATA',pinSagas.default.loadpinData)
// }


export default [
    homeSagas,
    pinSagas,
    detail
]
    
