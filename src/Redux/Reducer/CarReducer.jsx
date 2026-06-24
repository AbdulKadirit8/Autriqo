import { CREATE_CAR_RED, DELETE_CAR_RED, GET_CAR_RED, UPDATE_CAR_RED } from "../Constant";


export default function CarReducer(state = [], action) {
    let index
    switch (action.type) {
        case CREATE_CAR_RED:
            return [...state, action.payload]

        case GET_CAR_RED:
            return action.payload

        case UPDATE_CAR_RED:
            index = state.findIndex(x => x.id === action.payload.id)
            state[index] = { ...action.payload }
            return state

        case DELETE_CAR_RED:
            return state.filter(x => x.id !== action.payload.id)

        default:
            return state
    }
}
