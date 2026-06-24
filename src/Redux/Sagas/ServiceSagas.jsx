import { put } from "redux-saga/effects";
import { CREATE_SERVICE, CREATE_SERVICE_RED, DELETE_SERVICE, DELETE_SERVICE_RED, GET_SERVICE, GET_SERVICE_RED, UPDATE_SERVICE, UPDATE_SERVICE_RED } from "../Constant"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services";
import { takeEvery } from "redux-saga/effects";

function* createSaga(action){
    let response =createRecord("service", action)
    // real backend
    // let response =createMultipartRecord("service", action)
    yield put({type:CREATE_SERVICE_RED, payload:response})
}

function* getSaga(action){
    let response =yield getRecord("service", action)
    yield put({type:GET_SERVICE_RED, payload:response})
}

function* updateSaga(action){
    let response =updateRecord("service", action)
    yield put({type:UPDATE_SERVICE_RED, payload:action.payload})

    // Reac BAckEnd
    // let response = yield updateMultipartRecord("service", action)
    // yield put({ type: UPDATE_SERVICE_RED, payload: response })
}

function* deleteSaga(action) {                                         //Worker
    yield deleteRecord("service", action)
    yield put({ type: DELETE_SERVICE_RED, payload: action.payload })
}

export default function* ServiceSaga(){
    
    yield takeEvery(CREATE_SERVICE,createSaga)                 //Watcher
    yield takeEvery(GET_SERVICE,getSaga)                       //Watcher
    yield takeEvery(UPDATE_SERVICE,updateSaga)                 //Watcher
    yield takeEvery(DELETE_SERVICE,deleteSaga)                 //Watcher
}