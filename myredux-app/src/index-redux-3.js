//Redux core concepts
import { createStore } from "redux";
import produce from "immer";

//actions / actions constants
export const increment = 'counter/increment';
export const decrement = 'counter/decrement';
export const incrementByAmount = 'counter/incrementByAmount '

//reducer : biz logic : pure function
const counterReducer = (state = { value: 0 }, action) => {
    //biz logic : api
    switch (action.type) {
        case increment:
            return produce(state, draft => {
                draft.value++
            })
        case decrement:
            return produce(state, draft => {
                draft.value--
            })
        case incrementByAmount:
            return produce(state, draft => {
                draft.value += action.payload
            })
        default:
            return state;
    }
}


//create store Object
const store = createStore(counterReducer)

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

//action creator
// const incByAmountCreator = payload => {
//     return {
//         type: incrementByAmount,
//         payload: payload
//     }
// }
const incByAmountCreator = payload => ({
    type: incrementByAmount,
    payload
})
//
store.dispatch(incByAmountCreator(200))

