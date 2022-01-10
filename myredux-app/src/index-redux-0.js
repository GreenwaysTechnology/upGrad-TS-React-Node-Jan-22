//Redux core concepts
import { createStore } from "redux";
import produce from "immer";
//reducer : biz logic : pure function
const counterReducer = (state = { value: 0 }, action) => {
    //biz logic : api
    switch (action.type) {
        case 'increment':
            return produce(state, draft => {
                draft.value++
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
    type: 'increment'
}
store.dispatch(incrementAction)
store.dispatch(incrementAction)
store.dispatch({
    type: 'increment'
})