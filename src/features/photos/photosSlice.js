import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
export const fetchPhotos = createAsyncThunk(
    'photos/fetchPhotos',
   async (userId, thunkAPI) => {
       const response=  await axios.get(`https://jsonplaceholder.typicode.com/photos`,{
           params: {
               _limit: 10
           }
       })
        return response
    }
)
const initialState = {
    photosList: [],
    status:'idle',
}
export const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchPhotos.fulfilled, (state, action) => {
            state.photosList=action.payload;
            state.status='success'
        });
        builder.addCase(fetchPhotos.pending, (state, action) => {
         state.status='loading'
        })
    },
})
export  const{}=photosSlice.actions
export default photosSlice.reducer;
