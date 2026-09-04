import { put } from "redux-saga/effects";
import { CREATE_TESTIMONIAL, CREATE_TESTIMONIAL_RED, DELETE_TESTIMONIAL, DELETE_TESTIMONIAL_RED, GET_TESTIMONIAL, GET_TESTIMONIAL_RED, UPDATE_TESTIMONIAL, UPDATE_TESTIMONIAL_RED } from "../Constant"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services";
import { takeEvery } from "redux-saga/effects";

function* createSaga(action){
    let response =createRecord("testimonial", action)
    // real backend
    // let response =createMultipartRecord("testimonial", action)
    yield put({type:CREATE_TESTIMONIAL_RED, payload:response})
}

function* getSaga(action){
    let response =yield getRecord("testimonial", action)
    yield put({type:GET_TESTIMONIAL_RED, payload:response})
}

function* updateSaga(action){
    let response =updateRecord("testimonial", action)
    yield put({type:UPDATE_TESTIMONIAL_RED, payload:action.payload})

    // Reac BAckEnd
    // let response = yield updateMultipartRecord("testimonial", action)
    // yield put({ type: UPDATE_TESTIMONIAL_RED, payload: response })
}

function* deleteSaga(action) {                                         //Worker
    yield deleteRecord("testimonial", action)
    yield put({ type: DELETE_TESTIMONIAL_RED, payload: action.payload })
}

export default function* TestimonialSaga(){
    
    yield takeEvery(CREATE_TESTIMONIAL,createSaga)                 //Watcher
    yield takeEvery(GET_TESTIMONIAL,getSaga)                       //Watcher
    yield takeEvery(UPDATE_TESTIMONIAL,updateSaga)                 //Watcher
    yield takeEvery(DELETE_TESTIMONIAL,deleteSaga)                 //Watcher
}