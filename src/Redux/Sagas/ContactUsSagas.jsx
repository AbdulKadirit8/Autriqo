import { put } from "redux-saga/effects";
import { CREATE_CONTACTUS, CREATE_CONTACTUS_RED, DELETE_CONTACTUS, DELETE_CONTACTUS_RED, GET_CONTACTUS, GET_CONTACTUS_RED, UPDATE_CONTACTUS, UPDATE_CONTACTUS_RED } from "../Constant"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services";
import { takeEvery } from "redux-saga/effects";

function* createSaga(action){
    let response =createRecord("contactus", action)
    // real backend
    // let response =createMultipartRecord("contactus", action)
    yield put({type:CREATE_CONTACTUS_RED, payload:response})
}

function* getSaga(action){
    let response =yield getRecord("contactus", action)
    yield put({type:GET_CONTACTUS_RED, payload:response})
}

function* updateSaga(action){
    let response =updateRecord("contactus", action)
    yield put({type:UPDATE_CONTACTUS_RED, payload:action.payload})

    // Reac BAckEnd
    // let response = yield updateMultipartRecord("contactus", action)
    // yield put({ type: UPDATE_CONTACTUS_RED, payload: response })
}

function* deleteSaga(action) {                                         //Worker
    yield deleteRecord("contactus", action)
    yield put({ type: DELETE_CONTACTUS_RED, payload: action.payload })
}

export default function* ContactUsSaga(){
    
    yield takeEvery(CREATE_CONTACTUS,createSaga)                 //Watcher
    yield takeEvery(GET_CONTACTUS,getSaga)                       //Watcher
    yield takeEvery(UPDATE_CONTACTUS,updateSaga)                 //Watcher
    yield takeEvery(DELETE_CONTACTUS,deleteSaga)                 //Watcher
}