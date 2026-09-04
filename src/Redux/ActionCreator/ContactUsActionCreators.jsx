import { CREATE_CONTACTUS, DELETE_CONTACTUS, GET_CONTACTUS, UPDATE_CONTACTUS } from "../Constant";

export function createBrandContactUs(data) {
    return {
        type: CREATE_CONTACTUS,
        payload: data
    }
}

export function getBrandContactUs() {
    return {
        type: GET_CONTACTUS
    }
}

export function updateBrandContactUs(data) {
    return {
        type: UPDATE_CONTACTUS,
        payload: data
    }
}

export function deleteBrandContactUs(data) {
    return {
        type: DELETE_CONTACTUS,
        payload: data
    }
}