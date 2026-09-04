import { put } from "redux-saga/effects";
import { CREATE_USER, CREATE_USER_RED, DELETE_USER, DELETE_USER_RED, GET_USER, GET_USER_RED, UPDATE_USER, UPDATE_USER_RED } from "../Constant"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services";
import { takeEvery } from "redux-saga/effects";

function* createSaga(action){
    let response =createRecord("user", action)
    // real backend
    // let response =createMultipartRecord("user", action)
    yield put({type:CREATE_USER_RED, payload:response})
}

function* getSaga(action){
    let response =yield getRecord("user", action)
    yield put({type:GET_USER_RED, payload:response})
}

function* updateSaga(action){
    let response =updateRecord("user", action)
    yield put({type:UPDATE_USER_RED, payload:action.payload})

    // Reac BAckEnd
    // let response = yield updateMultipartRecord("user", action)
    // yield put({ type: UPDATE_USER_RED, payload: response })
}

function* deleteSaga(action) {                                         //Worker
    yield deleteRecord("user", action)
    yield put({ type: DELETE_USER_RED, payload: action.payload })
}

export default function* UserSaga(){
    
    yield takeEvery(CREATE_USER,createSaga)                 //Watcher
    yield takeEvery(GET_USER,getSaga)                       //Watcher
    yield takeEvery(UPDATE_USER,updateSaga)                 //Watcher
    yield takeEvery(DELETE_USER,deleteSaga)                 //Watcher
}