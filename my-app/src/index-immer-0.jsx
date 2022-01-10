import produce from "immer";

export function increasePointByTwo(state) {
    //spread notation
    // return {
    //     ...state, // level-0 copy
    //     house: {
    //         ...state.house, //level -1 copy
    //         points: state.house.points + 2
    //     }
    // }
    return produce(state, (draft) => {
        //mutable way of writing immutable code
        draft.house.points += 2
    })
}

let state = {
    house: {
        name: 'RavenClaw',
        points: 10 //
    }
}
//increase pointer by 2
let newState = increasePointByTwo(state);

console.log("Same Object (state===newState) ? =>", state === newState);