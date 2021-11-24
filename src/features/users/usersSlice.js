import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (userId, thunkAPI) => {
        const response=  await axios.get(`https://jsonplaceholder.typicode.com/users`,{
            params: {
                _limit: 10
            }
        })
        return response
    }
)
const initialState = {
    usersList: [],
    status:'idle',
}
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.usersList=action.payload;
            state.status='success'
        });
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.status='loading'
        })
    },
})
export  const{}=usersSlice.actions
export default usersSlice.reducer;
