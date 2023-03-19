import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {commentsDB} from '../axios/axios';

const initialState = {
    comments: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
};

const getPostComments = createAsyncThunk('comments/getComments', async ({id}, thunkAPI) => {
    try {
        const  {data}  = await commentsDB(id).get();
        console.log(data);
        return data;
    } catch (error) {
        const message = error.message;
        return thunkAPI.rejectWithValue(message);
    }
});

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        resetComments: (state) => {
            state.isLoading = false;
            state.comments = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPostComments.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getPostComments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.comments = action.payload;
            })
            .addCase(getPostComments.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const commentsRequest = {
    getPostComments,
};

export const commentsActions = commentsSlice.actions;

export default commentsSlice.reducer;
