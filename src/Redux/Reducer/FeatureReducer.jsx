import { CREATE_FEATURE, DELETE_FEATURE, GET_FEATURE, UPDATE_FEATURE } from "../Constant";


export default function FeatureReducer(state = [], action) {
    let index
    switch (action.type) {
        case CREATE_FEATURE:
            return [...state, action.payload]

        case GET_FEATURE:
            return action.payload

        case UPDATE_FEATURE:
            index = state.findIndex(x => x.id === action.payload.id)
            state[index] = { ...action.payload }
            return state

        case DELETE_FEATURE:
            return state.filter(x => x.id !== action.payload.id)

        default:
            return state
    }
}
