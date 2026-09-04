import { put } from "redux-saga/effects";
import { CREATE_NEWSLETTER, CREATE_NEWSLETTER_RED, DELETE_NEWSLETTER, DELETE_NEWSLETTER_RED, GET_NEWSLETTER, GET_NEWSLETTER_RED, UPDATE_NEWSLETTER, UPDATE_NEWSLETTER_RED } from "../Constant"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services";
import { takeEvery } from "redux-saga/effects";

function* createSaga(action){
    let response =createRecord("newsletter", action)
    // real backend
    // let response =createMultipartRecord("newsletter", action)
    yield put({type:CREATE_NEWSLETTER_RED, payload:response})
}

function* getSaga(action){
    let response =yield getRecord("newsletter", action)
    yield put({type:GET_NEWSLETTER_RED, payload:response})
}

function* updateSaga(action){
    let response =updateRecord("newsletter", action)
    yield put({type:UPDATE_NEWSLETTER_RED, payload:action.payload})

    // Reac BAckEnd
    // let response = yield updateMultipartRecord("newsletter", action)
    // yield put({ type: UPDATE_NEWSLETTER_RED, payload: response })
}

function* deleteSaga(action) {                                         //Worker
    yield deleteRecord("newsletter", action)
    yield put({ type: DELETE_NEWSLETTER_RED, payload: action.payload })
}

export default function* NewsletterSaga(){
    
    yield takeEvery(CREATE_NEWSLETTER,createSaga)                 //Watcher
    yield takeEvery(GET_NEWSLETTER,getSaga)                       //Watcher
    yield takeEvery(UPDATE_NEWSLETTER,updateSaga)                 //Watcher
    yield takeEvery(DELETE_NEWSLETTER,deleteSaga)                 //Watcher
}