//Redux core concepts
import { createStore, combineReducers } from "redux";
import produce from "immer";

//actions / actions constants
export const increment = 'counter/increment';
export const decrement = 'counter/decrement';
export const incrementByAmount = 'counter/incrementByAmount '

//reducer-1
export const incrementReducer = (state = { value: 0 }, action) => {
    switch (action.type) {
        case increment:
            return produce(state, draft => {
                draft.value++
            })
        case incrementByAmount:
            return produce(state, draft => {
                draft.value += action.payload
            })
        default:
            return state;
    }
}

export const decrementReducer = (state = { value: 0 }, action) => {
    switch (action.type) {
        case decrement:
            return produce(state, draft => {
                draft.value--
            })
        default:
            return state;
    }
}

//coimbe
const rootReducer = combineReducers({
    increment: incrementReducer,
    decrementReducer: decrementReducer
})

//create store Object
const store = createStore(rootReducer)

//view layer :listener for listening data
store.subscribe(function () {
    console.log(store.getState());
})

//request sending 
const incrementAction = {
    type: increment
}
store.dispatch(incrementAction)
store.dispatch(incrementAction)
store.dispatch({
    type: increment
})
store.dispatch({
    type: decrement
})
const incByAmountCreator = payload => ({
    type: incrementByAmount,
    payload
})
//
store.dispatch(incByAmountCreator(200))

