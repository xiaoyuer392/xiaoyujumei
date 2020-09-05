import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware= createSagaMiddleware()

import reducer from './reducer'
import sagas from './sagas'

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
sagas.forEach(value =>{
    sagaMiddleware.run(value.default.sagas)
})
export default store