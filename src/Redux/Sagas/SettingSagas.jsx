import { put } from "redux-saga/effects";
import { CREATE_SETTING, CREATE_SETTING_RED, DELETE_SETTING, DELETE_SETTING_RED, GET_SETTING, GET_SETTING_RED, UPDATE_SETTING, UPDATE_SETTING_RED } from "../Constant"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services";
import { takeEvery } from "redux-saga/effects";

function* createSaga(action){
    let response =createRecord("setting", action)
    // real backend
    // let response =createMultipartRecord("setting", action)
    yield put({type:CREATE_SETTING_RED, payload:response})
}

function* getSaga(action){
    let response =yield getRecord("setting", action)
    yield put({type:GET_SETTING_RED, payload:response})
}

function* updateSaga(action){
    let response =updateRecord("setting", action)
    yield put({type:UPDATE_SETTING_RED, payload:action.payload})

    // Reac BAckEnd
    // let response = yield updateMultipartRecord("setting", action)
    // yield put({ type: UPDATE_SETTING_RED, payload: response })
}

function* deleteSaga(action) {                                         //Worker
    yield deleteRecord("setting", action)
    yield put({ type: DELETE_SETTING_RED, payload: action.payload })
}

export default function* SettingSaga(){
    
    yield takeEvery(CREATE_SETTING,createSaga)                 //Watcher
    yield takeEvery(GET_SETTING,getSaga)                       //Watcher
    yield takeEvery(UPDATE_SETTING,updateSaga)                 //Watcher
    yield takeEvery(DELETE_SETTING,deleteSaga)                 //Watcher
}