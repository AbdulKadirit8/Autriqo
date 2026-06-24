import { put } from "redux-saga/effects";
import { CREATE_FEATURE, CREATE_FEATURE_RED, DELETE_FEATURE, DELETE_FEATURE_RED, GET_FEATURE, GET_FEATURE_RED, UPDATE_FEATURE, UPDATE_FEATURE_RED } from "../Constant"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services";
import { takeEvery } from "redux-saga/effects";

function* createSaga(action){
    let response =createRecord("feature", action)
    // real backend
    // let response =createMultipartRecord("feature", action)
    yield put({type:CREATE_FEATURE_RED, payload:response})
}

function* getSaga(action){
    let response =yield getRecord("feature", action)
    yield put({type:GET_FEATURE_RED, payload:response})
}

function* updateSaga(action){
    let response =updateRecord("feature", action)
    yield put({type:UPDATE_FEATURE_RED, payload:action.payload})

    // Reac BAckEnd
    // let response = yield updateMultipartRecord("feature", action)
    // yield put({ type: UPDATE_FEATURE_RED, payload: response })
}

function* deleteSaga(action) {                                         //Worker
    yield deleteRecord("feature", action)
    yield put({ type: DELETE_FEATURE_RED, payload: action.payload })
}

export default function* FeatureSaga(){
    
    yield takeEvery(CREATE_FEATURE,createSaga)                 //Watcher
    yield takeEvery(GET_FEATURE,getSaga)                       //Watcher
    yield takeEvery(UPDATE_FEATURE,updateSaga)                 //Watcher
    yield takeEvery(DELETE_FEATURE,deleteSaga)                 //Watcher
}