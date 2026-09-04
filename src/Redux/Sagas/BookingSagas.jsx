import { put } from "redux-saga/effects";
import { CREATE_BOOKING, CREATE_BOOKING_RED, DELETE_BOOKING, DELETE_BOOKING_RED, GET_BOOKING, GET_BOOKING_RED, UPDATE_BOOKING, UPDATE_BOOKING_RED } from "../Constant"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services";
import { takeEvery } from "redux-saga/effects";

function* createSaga(action){
    let response =createRecord("booking", action)
    // real backend
    // let response =createMultipartRecord("booking", action)
    yield put({type:CREATE_BOOKING_RED, payload:response})
}

function* getSaga(action){
    let response =yield getRecord("booking", action)
    yield put({type:GET_BOOKING_RED, payload:response})
}

function* updateSaga(action){
    let response =updateRecord("booking", action)
    yield put({type:UPDATE_BOOKING_RED, payload:action.payload})

    // Reac BAckEnd
    // let response = yield updateMultipartRecord("booking", action)
    // yield put({ type: UPDATE_BOOKING_RED, payload: response })
}

function* deleteSaga(action) {                                         //Worker
    yield deleteRecord("booking", action)
    yield put({ type: DELETE_BOOKING_RED, payload: action.payload })
}

export default function* BookingSaga(){
    
    yield takeEvery(CREATE_BOOKING,createSaga)                 //Watcher
    yield takeEvery(GET_BOOKING,getSaga)                       //Watcher
    yield takeEvery(UPDATE_BOOKING,updateSaga)                 //Watcher
    yield takeEvery(DELETE_BOOKING,deleteSaga)                 //Watcher
}