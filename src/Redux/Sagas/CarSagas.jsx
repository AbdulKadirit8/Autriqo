import { put } from "redux-saga/effects";
import { CREATE_CAR, CREATE_CAR_RED, DELETE_CAR, DELETE_CAR_RED, GET_CAR, GET_CAR_RED, UPDATE_CAR, UPDATE_CAR_RED } from "../Constant"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services";
import { takeEvery } from "redux-saga/effects";

function* createSaga(action){
    let response =createRecord("car", action)
    // real backend
    // let response =createMultipartRecord("car", action)
    yield put({type:CREATE_CAR_RED, payload:response})
}

function* getSaga(action){
    let response =yield getRecord("car", action)
    yield put({type:GET_CAR_RED, payload:response})
}

function* updateSaga(action){
    let response =updateRecord("car", action)
    yield put({type:UPDATE_CAR_RED, payload:action.payload})

    // Reac BAckEnd
    // let response = yield updateMultipartRecord("car", action)
    // yield put({ type: UPDATE_CAR_RED, payload: response })
}

function* deleteSaga(action) {                                         //Worker
    yield deleteRecord("car", action)
    yield put({ type: DELETE_CAR_RED, payload: action.payload })
}

export default function* CarSaga(){
    
    yield takeEvery(CREATE_CAR,createSaga)                 //Watcher
    yield takeEvery(GET_CAR,getSaga)                       //Watcher
    yield takeEvery(UPDATE_CAR,updateSaga)                 //Watcher
    yield takeEvery(DELETE_CAR,deleteSaga)                 //Watcher
}