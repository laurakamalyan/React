import {createSlice} from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    defaultState: {
        user: null,
    },
    reducers: {
        loginUserReduce: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const {loginUserReduce} = loginSlice.actions;
export default loginSlice.reducer;