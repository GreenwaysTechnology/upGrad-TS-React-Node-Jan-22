import React, { useEffect } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { createSlice, createAsyncThunk, configureStore } from "@reduxjs/toolkit";
import ReactDOM from 'react-dom'

export const getUsers = createAsyncThunk(
    "users/getUsers", //reducer Name
    async (dispatch, getState) => {
        return await fetch("https://jsonplaceholder.typicode.com/users").then(
            (res) => res.json()
        );
    }
);

const usersSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        status: null, //used by spinners for tracking various flows
    },
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.status = "loading";

        },
        [getUsers.fulfilled]: (state, action) => {
            state.status = "success";
            state.users = action.payload;
        },
        [getUsers.rejected]: (state, action) => {
            state.status = "failed";
        },
    },
});

const usersReducer = usersSlice.reducer;

const store = configureStore({
    reducer: {
        users: usersReducer,
    },
});

function UserApp() {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.users);

    //inital data load
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <div className="App">
            <h1>React Redux Toolkit - Middleware</h1>
            {users && users.map((user, i) => <h1 key={i}>{user.name}</h1>)}
        </div>
    );
}

const App = props => <div>
    <Provider store={store}>
        <UserApp />
    </Provider>

</div>
ReactDOM.render(<App />, document.getElementById('root'))
