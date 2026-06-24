import { put } from "redux-saga/effects";
import { CREATE_CATEGORY, CREATE_CATEGORY_RED, DELETE_CATEGORY, DELETE_CATEGORY_RED, GET_CATEGORY, GET_CATEGORY_RED, UPDATE_CATEGORY, UPDATE_CATEGORY_RED } from "../Constant"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services";
import { takeEvery } from "redux-saga/effects";

function* createSaga(action){
    let response =createRecord("category", action)
    // real backend
    // let response =createMultipartRecord("category", action)
    yield put({type:CREATE_CATEGORY_RED, payload:response})
}

function* getSaga(action){
    let response =yield getRecord("category", action)
    yield put({type:GET_CATEGORY_RED, payload:response})
}

function* updateSaga(action){
    let response =updateRecord("category", action)
    yield put({type:UPDATE_CATEGORY_RED, payload:action.payload})

    // Reac BAckEnd
    // let response = yield updateMultipartRecord("category", action)
    // yield put({ type: UPDATE_CATEGORY_RED, payload: response })
}

function* deleteSaga(action) {                                         //Worker
    yield deleteRecord("category", action)
    yield put({ type: DELETE_CATEGORY_RED, payload: action.payload })
}

export default function* CategorySaga(){
    
    yield takeEvery(CREATE_CATEGORY,createSaga)                 //Watcher
    yield takeEvery(GET_CATEGORY,getSaga)                       //Watcher
    yield takeEvery(UPDATE_CATEGORY,updateSaga)                 //Watcher
    yield takeEvery(DELETE_CATEGORY,deleteSaga)                 //Watcher
}