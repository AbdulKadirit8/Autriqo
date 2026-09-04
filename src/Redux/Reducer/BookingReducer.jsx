import { CREATE_BOOKING_RED, DELETE_BOOKING_RED, GET_BOOKING_RED, UPDATE_BOOKING_RED } from "../Constant";


export default function BookingReducer(state = [], action) {
    let index
    switch (action.type) {
        case CREATE_BOOKING_RED:
            return [...state, action.payload]

        case GET_BOOKING_RED:
            return action.payload

        case UPDATE_BOOKING_RED:
            index = state.findIndex(x => x.id === action.payload.id)
            state[index] = { ...action.payload }
            return state

        case DELETE_BOOKING_RED:
            return state.filter(x => x.id !== action.payload.id)

        default:
            return state
    }
}
