import { put } from "redux-saga/effects";
import { CREATE_BRAND, CREATE_BRAND_RED, DELETE_BRAND, DELETE_BRAND_RED, GET_BRAND, GET_BRAND_RED, UPDATE_BRAND, UPDATE_BRAND_RED } from "../Constant"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services";
import { takeEvery } from "redux-saga/effects";

function* createSaga(action){
    let response =createRecord("brand", action)
    // real backend
    // let response =createMultipartRecord("brand", action)
    yield put({type:CREATE_BRAND_RED, payload:response})
}

function* getSaga(action){
    let response =yield getRecord("brand", action)
    yield put({type:GET_BRAND_RED, payload:response})
}

function* updateSaga(action){
    let response =updateRecord("brand", action)
    yield put({type:UPDATE_BRAND_RED, payload:action.payload})

    // Reac BAckEnd
    // let response = yield updateMultipartRecord("brand", action)
    // yield put({ type: UPDATE_BRAND_RED, payload: response })
}

function* deleteSaga(action) {                                         //Worker
    yield deleteRecord("brand", action)
    yield put({ type: DELETE_BRAND_RED, payload: action.payload })
}

export default function* BrandSaga(){
    
    yield takeEvery(CREATE_BRAND,createSaga)                 //Watcher
    yield takeEvery(GET_BRAND,getSaga)                       //Watcher
    yield takeEvery(UPDATE_BRAND,updateSaga)                 //Watcher
    yield takeEvery(DELETE_BRAND,deleteSaga)                 //Watcher
}